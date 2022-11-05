import {memo} from "react"
import {classnames} from "shared/lib/helpers/classnames"

import {ArticleTextBlock} from "../../model/types/article"

import cls from "./ArticleText.module.sass"


interface ArticleTextProps {
    block: ArticleTextBlock
    className?: string
}

export const ArticleText = memo(({block, className}: ArticleTextProps) => (
    <div className={classnames(cls, [ "article__text" ], {}, [ className ])}>
        {block.title && <h4 className="mt-2">{block.title}</h4>}
        {block.paragraphs.length
            && (
            <div className="mt-1">{block.paragraphs.map((paragraph, i) => (
                <p key={`${block.id}_${i.toString()}`}>{paragraph}</p>))}</div>
            )}
    </div>
    ))
