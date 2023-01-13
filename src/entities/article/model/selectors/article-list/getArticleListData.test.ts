import { StateSchema } from "@/app/providers/store-provider"

import { getArticlesPageNum, getArticlesLoading } from "./getArticleListData"

describe("ArticleListData test", () => {
    test("Return loading status", () => {
        const state: DeepPartial<StateSchema> = {
            articles: { isLoading: true },
        }
        expect(getArticlesLoading(state as StateSchema)).toEqual(true)
    })

    test("Return a page number", () => {
        const state: DeepPartial<StateSchema> = {
            articles: { page: 2 },
        }
        expect(getArticlesPageNum(state as StateSchema)).toEqual(2)
    })
})
