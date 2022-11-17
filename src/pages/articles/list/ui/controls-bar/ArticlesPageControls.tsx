import {classnames} from "shared/lib/helpers/classnames"

import {ArticleViewControl, ArticleSortControl, ArticleSearchControl, ArticleTypeTabs} from "features/articles"

import cls from "./ArticlesPageControls.module.sass"


function ArticlesPageControls() {
    return (
        <div className={classnames(cls, [ "controls__bar" ], {}, [ "flex-wrap", "mb-2" ])}>
            <ArticleSortControl />
            <ArticleSearchControl />
            <ArticleViewControl />
            <ArticleTypeTabs />
        </div>
    )
}

export default ArticlesPageControls
