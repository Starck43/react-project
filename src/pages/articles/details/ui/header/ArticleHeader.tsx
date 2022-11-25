import {memo} from "react"

import {BackToListLink, EditArticleControl} from "features/articles"
import {Row} from "shared/ui/stack"

// import cls from "./ArticleHeader.module.sass"


interface ArticleHeaderProps {
    className?: string
}

export const ArticleHeader = memo(({className}: ArticleHeaderProps) => (
    <Row className={className}>
        {/* <Header title={t("статья")} shadowed align="center" /> */}
        <BackToListLink />
        <EditArticleControl />
    </Row>
))
