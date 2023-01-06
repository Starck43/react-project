import { memo, useMemo } from "react"

import { classnames } from "@/shared/lib/helpers/classnames"
import { Skeleton, SkeletonElementType } from "@/shared/ui/skeleton"
import { Card } from "@/shared/ui/card"
import { Flex, Row } from "@/shared/ui/stack"

import { ArticleView } from "../../model/consts"

import cls from "../article-list-item/ArticleListItem.module.sass"

interface ArticleListSkeletonProps {
    view: ArticleView
    className?: string
}

// TODO: Article List Avatar and correct scroll position on loading next pages
export const ArticleListSkeleton = memo((props: ArticleListSkeletonProps) => {
    const { view, className } = props

    const renderSkeletonItem = useMemo(
        () =>
            view === ArticleView.TILE ? (
                <>
                    <Skeleton
                        variant="primary"
                        elements={[SkeletonElementType.AVATAR]}
                        avatarSize="auto"
                        className={classnames(cls, ["avatar"])}
                    />
                    <Flex gap="none" fullWidth className={cls.header}>
                        <Skeleton
                            variant="primary"
                            elements={[
                                SkeletonElementType.TITLE,
                                SkeletonElementType.TITLE,
                            ]}
                            width="100%"
                            height="3.5em"
                            rounded
                        />
                    </Flex>
                </>
            ) : (
                <>
                    <Skeleton
                        variant="primary"
                        elements={[
                            SkeletonElementType.TITLE,
                            SkeletonElementType.TITLE,
                        ]}
                        inlined
                        rounded
                        width="20%"
                        height="1em"
                        className="mb-1"
                    />
                    <Skeleton
                        variant="primary"
                        elements={[SkeletonElementType.TITLE]}
                        rounded
                        inlined
                        width="60%"
                        height="2em"
                        className="mb-1"
                    />
                    <Skeleton
                        variant="primary"
                        elements={[SkeletonElementType.TITLE]}
                        rounded
                        inlined
                        width="35%"
                        height="1em"
                    />
                    <Row
                        justify="between"
                        fullWidth
                        className={classnames(cls, ["body"], {}, ["my-2"])}
                    >
                        <Skeleton
                            variant="primary"
                            elements={[SkeletonElementType.AVATAR]}
                            rounded
                            height={100}
                            width={100}
                            className="mr-1"
                        />
                        <Skeleton
                            variant="primary"
                            elements={[
                                SkeletonElementType.TITLE,
                                SkeletonElementType.BLOCK,
                            ]}
                            rounded
                            className="g-1"
                        />
                    </Row>
                    <Skeleton
                        variant="primary"
                        elements={[
                            SkeletonElementType.TITLE,
                            SkeletonElementType.TITLE,
                        ]}
                        inlined
                        rounded
                        height="2.2em"
                        width={100}
                    />
                </>
            ),
        [view],
    )

    return (
        <Card
            bordered
            rounded
            gap="none"
            shadowed={false}
            className={classnames(cls, ["article", view], {}, [className])}
        >
            {renderSkeletonItem}
        </Card>
    )
})

interface RenderProps {
    view: ArticleView
    count?: number
    className?: string
}

export const renderArticlesSkeleton = (props: RenderProps) => {
    const { view, count = 9, className } = props

    return new Array(count).fill(0).map((_, key) => (
        <ArticleListSkeleton
            // eslint-disable-next-line react/no-array-index-key
            key={key}
            view={view}
            className={className}
        />
    ))
}
