import {lazy, Suspense} from "react"

import {PageLoader} from "@/widgets/page-loader"

import {ArticleRatingProps} from "./ArticleRatingCard"


const ArticleRatingCardLazy = lazy(() => import("./ArticleRatingCard"))

export const ArticleRatingCardAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<PageLoader />}>
        <ArticleRatingCardLazy {...props} />
    </Suspense>
)
