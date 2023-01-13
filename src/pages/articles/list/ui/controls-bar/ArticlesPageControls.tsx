import { ArticleViewControl, ArticleSortControl, ArticleSearchControl, ArticleTypeTabs } from "@/features/articles"

import { Row } from "@/shared/ui/stack"

// import cls from "./ArticlesPageControls.module.sass"

interface ArticlesPageControlsProps {
    className?: string
}

function ArticlesPageControls({ className }: ArticlesPageControlsProps) {
    return (
        <Row justify="between" fullWidth wrap gap="sm" className={className}>
            <ArticleSortControl />
            <ArticleSearchControl />
            <ArticleViewControl />
            <ArticleTypeTabs />
        </Row>
    )
}

export default ArticlesPageControls
