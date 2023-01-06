import { memo } from "react"

import { ArticleTextBlock } from "../../model/types/article"

// import cls from "./ArticleText.module.sass"

interface ArticleTextProps {
    block: ArticleTextBlock
    className?: string
}

export const ArticleText = memo(({ block, className }: ArticleTextProps) => (
    <div className={className}>
        {block.title && <h4>{block.title}</h4>}

        {block.paragraphs.length && (
            <div className="paragraphs__block mt-1">
                {block.paragraphs.map((paragraph, i) => (
                    <p key={`${block.id}_${i.toString()}`}>{paragraph}</p>
                ))}
            </div>
        )}
    </div>
))
