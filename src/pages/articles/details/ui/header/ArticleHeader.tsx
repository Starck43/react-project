import { memo } from "react"

import { BackToListLink, EditArticleControl } from "@/features/articles"

import { Row } from "@/shared/ui/stack"

// import cls from "./ArticleHeader.module.sass"

interface ArticleHeaderProps {
    articleId: string
    className?: string
}

export const ArticleHeader = memo(({ articleId, className }: ArticleHeaderProps) => (
    <Row justify="between" align="center" className={className}>
        {/* <Header tag="h2" title={t("статья")} shadowed align="center" /> */}
        <BackToListLink />
        <EditArticleControl articleId={articleId} />
    </Row>
))
