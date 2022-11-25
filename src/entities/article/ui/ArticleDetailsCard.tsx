import {memo, useCallback} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {classnames} from "shared/lib/helpers/classnames"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"
import {Info, InfoAlign} from "shared/ui/info/Info"
import Header, {TitleType} from "shared/ui/header/Header"
import {Col, Flex} from "shared/ui/stack"
import EventIcon from "shared/assets/icons/calendar-20-20.svg"
import EyeIcon from "shared/assets/icons/eye-20-20.svg"


import {getArticleData, getArticleError, getArticleLoading} from "../model/selectors/article-details/getArticleDetails"
import {fetchArticleById} from "../model/services/fetchArticleById/fetchArticleById"
import {articleReducer} from "../model/slice/article-details/articleSlice"
import {ArticleBlock, ArticleBlockType} from "../model/types/article"
import {ArticleCode} from "../ui/article-code/ArticleCode"
import {ArticleImage} from "../ui/article-image/ArticleImage"
import {ArticleDetailsSkeleton} from "./article-details-skeleton/ArticleDetailsSkeleton"
import {ArticleText} from "../ui/article-text/ArticleText"

import cls from "./ArticleDetailsCard.module.sass"


interface ArticleDetailsCardProps {
    articleId: string
    className?: string
}

const initialReducers: ReducerList = {article: articleReducer}

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
                // TODO: create Image component with sizes and lazyloading
                return <ArticleImage key={block.id} block={block} className="mt-1 size-sm" />
            case ArticleBlockType.TEXT:
                return <ArticleText key={block.id} block={block} className="mt-1" />
            default:
                return null
        }
    }, [])

    let content

    if (error) {
        return <Info title={t("ошибка загрузки статьи!")} align={InfoAlign.CENTER} />
    }

    if (isLoading) {
        content = (<ArticleDetailsSkeleton className="mb-2" />)
    }

    if (!isLoading && article) {
        content = (
            <>
                <Header
                    title={article?.title}
                    subTitle={article?.subtitle}
                    titleType={TitleType.H2}
                >
                    <Flex gap="xs" className="size-sm"><EventIcon /><span>{article?.createdAt}</span></Flex>
                    <Flex gap="xs" className="size-sm"><EyeIcon /><span>{article?.views}</span></Flex>
                </Header>

                <img src={article?.img} alt="" className={cls.image} />

                <Col gap="md" fullWidth className="mt-2">
                    {article?.blocks?.map(renderBlock)}
                </Col>
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} destroyOnUnmount={false}>
            <section className={classnames(cls, [ "article__details" ], {}, [ "mt-2", className ])}>
                {content}
            </section>
        </DynamicModuleLoader>
    )
})
