import {lazy, Suspense} from "react"

import {Loader} from "@/shared/ui/loader/Loader"

import {ArticleRatingProps} from "./ArticleRatingCard"


const ArticleRatingCardLazy = lazy(() => import("./ArticleRatingCard"))

export const ArticleRatingCardAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Loader />}>
        <ArticleRatingCardLazy {...props} />
    </Suspense>
)
