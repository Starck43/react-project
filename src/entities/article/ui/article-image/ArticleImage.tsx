import {classnames} from "shared/lib/helpers/classnames"
import {Info, InfoAlign, InfoSize} from "shared/ui/info/Info"

import {ArticleImageBlock} from "../../model/types/article"

import cls from "./ArticleImage.module.sass"


interface ArticleImageProps {
    block: ArticleImageBlock
    className?: string
}

export const ArticleImage = ({block, className}: ArticleImageProps) => (
    <figure className={classnames(cls, [ "article__image" ], {}, [ "mt-1", "size-sm", className ])}>
        <img src={block.src} alt="" />
        <figcaption className={cls.image__figcaption} title={block.title}>{block.title}</figcaption>
    </figure>
)
