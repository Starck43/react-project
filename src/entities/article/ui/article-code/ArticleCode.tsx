import {memo} from "react"
import {Code} from "@/shared/ui/code/Code"

import {ArticleCodeBlock} from "../../model/types/article"


interface ArticleCodeProps {
    block: ArticleCodeBlock
	className?: string
}

export const ArticleCode = memo(({block, className}: ArticleCodeProps) => (
    <Code text={block.code} rounded className={className} />
))
