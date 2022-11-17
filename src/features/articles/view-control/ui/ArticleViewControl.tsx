import {memo, useCallback} from "react"
import {useSelector} from "react-redux"

import {articlesActions, ArticleView, getArticlesView} from "entities/article"

import {classnames} from "shared/lib/helpers/classnames"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Icon} from "shared/ui/icon/Icon"

import ListIcon from "shared/assets/icons/list-24-24.svg"
import TileIcon from "shared/assets/icons/tile-24-24.svg"

import cls from "./ArticleViewControl.module.sass"


const viewMode = [
    {
        view: ArticleView.TILE,
        icon: TileIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
]

interface ArticleViewControlProps {
    className?: string
}

export const ArticleViewControl = memo(({className}: ArticleViewControlProps) => {
    const dispatch = useAppDispatch()
    const view = useSelector(getArticlesView)

    const onViewClick = useCallback((newView: ArticleView) => () => {
        dispatch(articlesActions.setView(newView))
    }, [ dispatch ])

    return (
        <div className={classnames(cls, [ "view__control" ], {}, [ className ])}>
            {viewMode.map((mode) => (
                <Button
                    feature={view !== mode.view ? ButtonFeature.BLANK : ButtonFeature.INVERTED}
                    onClick={onViewClick(mode.view)}
                    key={mode.view}
                    className={classnames(cls, [ "button", view !== mode.view ? "active" : "" ])}
                >
                    <Icon Svg={mode.icon} />
                </Button>
            ))}
        </div>
    )
})
