import {memo, useCallback, useMemo} from "react"
import {useSelector} from "react-redux"

import {articlesActions, ArticleType, getArticlesType, fetchArticleList} from "@/entities/article"

import {classnames} from "@/shared/lib/helpers/classnames"
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch"
import {Tab, Tabs} from "@/shared/ui/tabs"

import cls from "./ArticleTypeTabs.module.sass"


interface ArticleViewControlProps {
    className?: string
}

export const ArticleTypeTabs = memo(({className}: ArticleViewControlProps) => {
    const dispatch = useAppDispatch()
    const type = useSelector(getArticlesType)

    // TODO: Add context for articles translations
    const typeTabs = useMemo<Tab[]>(() => Object.keys(ArticleType).map((key) => (
        {
            value: key,
            content: ArticleType[key as ArticleType],
        }
    )), [])

    const onTabClickHandler = useCallback((tab: Tab) => {
        dispatch(articlesActions.setType(tab.value as ArticleType))
        dispatch(articlesActions.setPage(1))
        dispatch(fetchArticleList({replace: true}))
    }, [ dispatch ])


    return (
        <Tabs
            tabs={typeTabs}
            value={type}
            onTabClickHandler={onTabClickHandler}
            className={classnames(cls, [ "type__tabs" ], {}, [ className ])}
        />
    )
})
