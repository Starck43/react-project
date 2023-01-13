import { StateSchema } from "@/app/providers/store-provider"

import type { Article } from "../../types/article"
import { getArticleData, getArticleForm, getArticleLoading, getArticleError } from "./getArticleDetails"

const article: Article = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    type: [],
    blocks: [],
    user: {
        id: "1",
        username: "admin",
    },
}

describe("getArticleData test", () => {
    test("Return article data state", () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                data: article,
            },
        }
        expect(getArticleData(state as StateSchema)).toEqual(article)
    })

    test("Return an empty data state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleData(state as StateSchema)).toEqual(undefined)
    })
})

describe("getArticleForm test", () => {
    test("Return edit form state", () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                form: article,
            },
        }
        expect(getArticleForm(state as StateSchema)).toEqual(article)
    })

    test("Return an empty form state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleForm(state as StateSchema)).toEqual(undefined)
    })
})

describe("getArticleLoading test", () => {
    test("Return state with loading status", () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                isLoading: true,
            },
        }
        expect(getArticleLoading(state as StateSchema)).toEqual(true)
    })

    test("Return state with not loading status", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleLoading(state as StateSchema)).toEqual(false)
    })
})

describe("getArticleError test", () => {
    test("Return state with some text error", () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                error: "error", // anything
            },
        }
        expect(getArticleError(state as StateSchema)).toEqual("error")
    })

    test("Return state with undefined error", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleError(state as StateSchema)).toEqual(undefined)
    })
})
