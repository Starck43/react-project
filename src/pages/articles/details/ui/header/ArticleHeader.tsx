import {memo} from "react"

import {classnames} from "shared/lib/helpers/classnames"

import {BackToListLink, EditArticleControl} from "features/articles"

import cls from "./ArticleHeader.module.sass"


interface ArticleHeaderProps {
    className?: string
}

export const ArticleHeader = memo(({className}: ArticleHeaderProps) => (
    <div className={classnames(cls, [ "article__header" ], {}, [ "centered", className ])}>
        {/* <Header title={t("статья")} shadowed align={HeaderAlign.CENTER} /> */}
        <BackToListLink />
        <EditArticleControl />
    </div>
))
