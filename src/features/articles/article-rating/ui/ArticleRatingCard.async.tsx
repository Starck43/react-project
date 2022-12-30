import {lazy, Suspense} from "react"

import {ArticleRatingProps} from "./ArticleRatingCard"


const ArticleRatingCardLazy = lazy(() => import("./ArticleRatingCard"))

export const ArticleRatingCardAsync = (props: ArticleRatingProps) => (
    <Suspense fallback="">
        <ArticleRatingCardLazy {...props} />
    </Suspense>
)
