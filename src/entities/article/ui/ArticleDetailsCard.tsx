import {memo, useCallback} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {classnames} from "shared/lib/helpers/classnames"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"
import {Info, InfoAlign} from "shared/ui/info/Info"
import Header, {HeaderAlign, TitleType} from "shared/ui/header/Header"
import {Avatar} from "shared/ui/avatar/Avatar"
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
                return <ArticleCode key={block.id} block={block} />
            case ArticleBlockType.IMAGE:
                return <ArticleImage key={block.id} block={block} />
            case ArticleBlockType.TEXT:
                return <ArticleText key={block.id} block={block} />
            default:
                return null
        }
    }, [])

    let content

    if (error) {
        return <Info title={t("ошибка загрузки статьи!")} align={InfoAlign.CENTER} />
    }

    if (isLoading) {
        // TODO: update skeleton like in Article List
        content = (<ArticleDetailsSkeleton className="mb-2" />)
    }

    if (!isLoading && article) {
        content = (
            <>
                <Header
                    title={article?.title}
                    subTitle={article?.subtitle}
                    titleType={TitleType.H2}
                    align={HeaderAlign.LEFT}
                >
                    <div className="inline size-sm"><EventIcon /><span>{article?.createdAt}</span></div>
                    <div className="inline size-sm"><EyeIcon /><span>{article?.views}</span></div>
                </Header>

                <img src={article?.img} alt="" className={cls.image} />

                <div className="flex-wrap vertical g-3">
                    {article?.blocks?.map(renderBlock)}
                </div>
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
