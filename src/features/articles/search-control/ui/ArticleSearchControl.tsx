import {memo, useCallback} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import {articlesActions, getArticlesSearch, fetchArticleList} from "entities/article"

import {classnames} from "shared/lib/helpers/classnames"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useDebounce} from "shared/lib/hooks/useDebounce"
import Input from "shared/ui/input/Input"

import cls from "./ArticleSearchControl.module.sass"


export const ArticleSearchControl = memo(() => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const search = useSelector(getArticlesSearch)

    const debouncedSearch = useDebounce(() => dispatch(fetchArticleList({replace: true})))

    const onSearchInputClick = useCallback((newVal: string) => {
        dispatch(articlesActions.setSearch(newVal))
        dispatch(articlesActions.setPage(1))
        debouncedSearch()
    }, [ debouncedSearch, dispatch ])

    return (
        <div className={classnames(cls, [ "search__control" ], {}, [])}>
            <Input
                value={search}
                rounded
                placeholder={t("поиск")}
                onChange={(val) => onSearchInputClick(val)}
            />
        </div>
    )
})
