import {LazyImage} from "@/shared/ui/image/Image"
import {ArticleImageBlock} from "../../model/types/article"

import cls from "./ArticleImage.module.sass"


interface ArticleImageProps {
    block: ArticleImageBlock
    className?: string
}

export const ArticleImage = ({block, className}: ArticleImageProps) => (
    <figure className={className}>

        <LazyImage src={block.src} alt="" />

        <figcaption
            className={cls.image__figcaption}
            title={block.title}
        >
            {block.title}
        </figcaption>

    </figure>
)
