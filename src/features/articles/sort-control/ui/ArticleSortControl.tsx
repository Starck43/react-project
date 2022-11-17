import {
    getArticlesOrder,
    getArticlesSearch,
    getArticlesSort,
} from "entities/article/model/selectors/article-list/getArticleListData"
import {fetchArticleList} from "entities/article/model/services/fetchArticleList/fetchArticleList"
import {ArticleSortType, ArticleView} from "entities/article/model/types/article"
import {memo, useCallback, useMemo} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"
import {classnames} from "shared/lib/helpers/classnames"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {Select} from "shared/ui/select/Select"

import {ArticleOrderType, articlesActions} from "entities/article"

import cls from "./ArticleSortControl.module.sass"


interface ArticleSortControlProps {
    className?: string
}

export const ArticleSortControl = memo(({className}: ArticleSortControlProps) => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const order = useSelector(getArticlesOrder)
    const sort = useSelector(getArticlesSort)

    const onOrderClick = useCallback((newVal: ArticleOrderType) => {
        dispatch(articlesActions.setOrder(newVal))
        dispatch(articlesActions.setPage(1))
        dispatch(fetchArticleList({replace: true}))
    }, [ dispatch ])

    const onSortClick = useCallback((newVal: ArticleSortType) => {
        dispatch(articlesActions.setSort(newVal))
        dispatch(articlesActions.setPage(1))
        dispatch(fetchArticleList({replace: true}))
    }, [ dispatch ])

    const orderOptions = useMemo(() => [
        {
            value: ArticleOrderType.ASC,
            content: t("order", {context: ArticleOrderType.ASC}),
        },
        {
            value: ArticleOrderType.DESC,
            content: t("order", {context: ArticleOrderType.DESC}),
        },
    ], [ t ])

    // TODO: Replace direct translations on context for articles
    const sortOptions = useMemo(() => [
        {
            value: ArticleSortType.TITLE,
            content: t("заголовок"),
        },
        {
            value: ArticleSortType.CREATED,
            content: t("дата создания"),
        },
        {
            value: ArticleSortType.VIEWS,
            content: t("количество просмотров"),
        },
    ], [ t ])

    return (
        <div className={classnames(cls, [ "sort__control" ], {}, [ "flex-wrap", "g-1", className ])}>
            <Select
                label={t("сортировать по")}
                value={sort}
                options={sortOptions}
                compact
                rounded
                onChange={(val) => onSortClick(val as ArticleSortType)}
            />
            <Select
                label={t("по направлению")}
                value={order}
                options={orderOptions}
                compact
                rounded
                onChange={(val) => onOrderClick(val as ArticleOrderType)}
            />
        </div>
    )
})
