import cls from "entities/article/ui/article-text/ArticleText.module.sass"
import {memo} from "react"
import {classnames} from "shared/lib/helpers/classnames"
import {Code} from "shared/ui/code/Code"

import {ArticleCodeBlock} from "../../model/types/article"


interface ArticleCodeProps {
    block: ArticleCodeBlock
	className?: string
}

export const ArticleCode = memo(({block, className}: ArticleCodeProps) => (
    <Code text={block.code} rounded className={classnames(cls, [], {}, [ "mt-1", className ])} />
))
