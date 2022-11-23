import {memo, useMemo} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import {Card} from "shared/ui/card/Card"
import {Skeleton, SkeletonElementType, SkeletonVariant} from "shared/ui/skeleton/Skeleton"

import {ArticleView} from "../../model/types/article"

import cls from "../article-list-item/ArticleListItem.module.sass"


interface ArticleListSkeletonProps {
    view: ArticleView
    className?: string
}

export const ArticleListSkeleton = memo((props: ArticleListSkeletonProps) => {
    const {view, className} = props
    const renderSkeletonItem = useMemo(() => (
        view === ArticleView.TILE
            ? (
                <>
                    <Skeleton
                        variant={SkeletonVariant.PRIMARY}
                        elements={[ SkeletonElementType.AVATAR ]}
                        className={classnames(cls, [ "avatar" ], {}, [ "mb-1" ])}
                    />
                    <div className={classnames(cls, [ "meta" ], {}, [ "centered" ])}>
                        <Skeleton
                            variant={SkeletonVariant.PRIMARY}
                            elements={[ SkeletonElementType.TITLE, SkeletonElementType.TITLE ]}
                            rounded
                            width="90%"
                        />
                    </div>
                </>
            )
            : (
                <>
                    <Skeleton
                        variant={SkeletonVariant.PRIMARY}
                        elements={[ SkeletonElementType.TITLE, SkeletonElementType.TITLE ]}
                        inlined
                        rounded
                        width="20%"
                        height="1em"
                        className="mb-1"
                    />
                    <Skeleton
                        variant={SkeletonVariant.PRIMARY}
                        elements={[ SkeletonElementType.TITLE ]}
                        rounded
                        inlined
                        width="60%"
                        height="2em"
                        className="mb-1"
                    />
                    <Skeleton
                        variant={SkeletonVariant.PRIMARY}
                        elements={[ SkeletonElementType.TITLE ]}
                        rounded
                        inlined
                        width="35%"
                        height="1em"
                    />
                    <div className={classnames(cls, [ "body" ], {}, [ "my-2" ])}>
                        <Skeleton
                            variant={SkeletonVariant.PRIMARY}
                            elements={[ SkeletonElementType.AVATAR ]}
                            rounded
                            height={100}
                            width={100}
                            className="mr-1"
                        />
                        <Skeleton
                            variant={SkeletonVariant.PRIMARY}
                            elements={[ SkeletonElementType.TITLE, SkeletonElementType.BLOCK ]}
                            rounded
                            className="g-1"
                        />

                    </div>
                    <Skeleton
                        variant={SkeletonVariant.PRIMARY}
                        elements={[ SkeletonElementType.TITLE, SkeletonElementType.TITLE ]}
                        inlined
                        rounded
                        height="2.2em"
                        width={100}
                    />
                </>
            )
    ), [ view ])

    return (
        <Card
            bordered
            rounded
            shadowed={false}
            className={classnames(cls, [ "article", view ], {}, [ "flex-wrap", className ])}
        >
            {renderSkeletonItem}
        </Card>
    )
})


export const renderArticlesSkeleton = (view: ArticleView) => (
    new Array(view === ArticleView.TILE ? 12 : 4)
    .fill(0)
    .map((_, i) => <ArticleListSkeleton view={view} key={i} />)
)
