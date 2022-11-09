import {memo, useCallback, useEffect} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"
import EventIcon from "shared/assets/icons/calendar-20-20.svg"
import EyeIcon from "shared/assets/icons/eye-20-20.svg"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {classnames} from "shared/lib/helpers/classnames"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {Avatar} from "shared/ui/avatar/Avatar"
import {Info, InfoAlign} from "shared/ui/info/Info"
import Header, {HeaderAlign, TitleType} from "shared/ui/header/Header"

import {getArticleData, getArticleError, getArticleLoading} from "../model/selectors/getArticleDetails"
import {fetchArticleById} from "../model/services/fetchArticleById"
import {articleReducer} from "../model/slice/articleSlice"
import {ArticleBlock, ArticleBlockType} from "../model/types/article"
import {ArticleCode} from "../ui/article-code/ArticleCode"
import {ArticleImage} from "../ui/article-image/ArticleImage"
import {ArticleSkeleton} from "../ui/article-skeleton/ArticleSkeleton"
import {ArticleText} from "../ui/article-text/ArticleText"


import cls from "./ArticleDetailsCard.module.sass"


interface ArticleDetailsCardProps {
    id: string
    className?: string
}

const initialReducers: ReducerList = {article: articleReducer}

export const ArticleDetailsCard = memo(({id, className}: ArticleDetailsCardProps) => {
    const {t} = useTranslation("articles")
    const dispatch = useAppDispatch()
    const article = useSelector(getArticleData)
    const isLoading = useSelector(getArticleLoading)
    const error = useSelector(getArticleError)

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
        dispatch(fetchArticleById(id))
        }
    }, [ dispatch, id ])

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

    if (isLoading) {
        content = (<ArticleSkeleton rounded className="mb-2" />)
    }

    if (error) {
        content = <Info title={t("ошибка загрузки статьи!")} align={InfoAlign.CENTER} />
    }

    if (article) {
        content = (
            <>
                <Avatar src={article?.img} rounded className="mb-2" />
                <Header
                    title={article?.title}
                    subTitle={article?.subtitle}
                    titleType={TitleType.H2}
                    align={HeaderAlign.LEFT}
                >
                    <div className="inline size-sm"><EventIcon /><span>{article?.createdAt}</span></div>
                    <div className="inline size-sm"><EyeIcon /><span>{article?.views}</span></div>
                </Header>
                <div className={cls.blocks}>{article?.blocks.map(renderBlock)}</div>
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} destroyOnUnmount>
            <div className={classnames(cls, [ "article__details" ], {}, [ className ])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
