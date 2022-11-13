import {ArticleView} from "entities/article"
import {memo} from "react"
import {useTranslation} from "react-i18next"
import ListIcon from "shared/assets/icons/list-24-24.svg"
import TileIcon from "shared/assets/icons/tile-24-24.svg"

import {classnames} from "shared/lib/helpers/classnames"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Icon} from "shared/ui/icon/Icon"

import cls from "./ArticleViewSwitcher.module.sass"


export enum ArticleViewAlign {
    LEFT = "left",
    RIGHT = "right",
}

interface ArticleViewSwitcherProps {
    view: ArticleView
    align?: ArticleViewAlign
    onChangeViewHandler?: (view: ArticleView) => void
    className?: string
}

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

export const ArticleViewSwitcher = memo((props: ArticleViewSwitcherProps) => {
    const {view, align, onChangeViewHandler, className} = props
    const {t} = useTranslation("articles")

    const onViewClick = (newView: ArticleView) => () => {
        onChangeViewHandler?.(newView)
    }

    return (
        <div className={classnames(cls, [ "view__switcher", align ], {}, [ "flex-wrap", "mb-2", className ])}>
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
