import {memo, useCallback} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import {classnames} from "@/shared/lib/helpers/classnames"
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "@/shared/lib/hooks/useInitialEffect"
import {Info} from "@/shared/ui/info"
import {Header} from "@/shared/ui/header"
import {Image} from "@/shared/ui/image"
import {Col, Flex} from "@/shared/ui/stack"
import EventIcon from "@/shared/assets/icons/calendar-20-20.svg"
import EyeIcon from "@/shared/assets/icons/eye-20-20.svg"

import {ArticleBlockType} from "../model/consts"
import {ArticleBlock} from "../model/types/article"
import {getArticleData, getArticleError, getArticleLoading} from "../model/selectors/article-details/getArticleDetails"
import {fetchArticleById} from "../model/services/fetchArticleById/fetchArticleById"
import {ArticleImage} from "./article-image/ArticleImage"
import {ArticleText} from "./article-text/ArticleText"
import {ArticleCode} from "./article-code/ArticleCode"
import {ArticleDetailsSkeleton} from "./article-details-skeleton/ArticleDetailsSkeleton"

import cls from "./ArticleDetailsCard.module.sass"


interface ArticleDetailsCardProps {
    articleId: string
    className?: string
}


export const ArticleDetailsCard = memo(({articleId, className}: ArticleDetailsCardProps) => {
    const {t} = useTranslation("articles")
    const dispatch = useAppDispatch()
    const article = useSelector(getArticleData)
    const isLoading = useSelector(getArticleLoading)
    const error = useSelector(getArticleError)

    useInitialEffect(() => {
        dispatch(fetchArticleById(articleId))
    })

    const renderBlock = useCallback((block: ArticleBlock) => {
        // eslint-disable-next-line default-case
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCode key={block.id} block={block} className="mt-1" />
            case ArticleBlockType.IMAGE:
                // TODO: create Image component with sizes
                return <ArticleImage key={block.id} block={block} className="mt-1 size-sm" />
            case ArticleBlockType.TEXT:
                return <ArticleText key={block.id} block={block} className="mt-1" />
            default:
                return null
        }
    }, [])

    let content

    if (error) {
        return <Info subTitle={t("ошибка загрузки статьи!")} />
    }

    if (isLoading) {
        content = (<ArticleDetailsSkeleton className="mb-2" />)
    }

    if (!isLoading && article) {
        content = (
            <>
                <Header
                    tag="h2"
                    title={article?.title}
                    subTitle={article?.subtitle}
                    gap="xs"
                    align="start"
                >
                    <Flex gap="xs" className="size-md"><EventIcon /><span>{article?.createdAt}</span></Flex>
                    <Flex gap="xs" className="size-md"><EyeIcon /><span>{article?.views}</span></Flex>
                </Header>

                <Image src={article?.img} alt={article.title} className={cls.image} />

                <Col gap="md" fullWidth className="mt-1">
                    {article?.blocks?.map(renderBlock)}
                </Col>
            </>
        )
    }

    return (
        <Col
            data-testid={`Article.${article ? "Info" : "Loading"}`}
            as="section"
            className={classnames(cls, [ "article__details" ], {}, [ "mt-2", className ])}
        >
            {content}
        </Col>
    )
})
