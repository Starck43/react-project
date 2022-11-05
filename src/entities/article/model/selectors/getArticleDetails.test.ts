import {StateSchema} from "app/providers/store-provider"
import {getArticleData, getArticleLoading, getArticleError} from "./getArticleDetails"


const data = {
    id: "1",
    title: "title",
}

describe("getArticleData test", () => {
    test("Return success article data", () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                data,
            },
        }
        expect(getArticleData(state as StateSchema)).toEqual(data)
    })

    test("Return an empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleData(state as StateSchema)).toEqual(undefined)
    })
})



describe("getArticleLoading test", () => {
    test("Return success article loading", () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                isLoading: true,
            },
        }
        expect(getArticleLoading(state as StateSchema)).toEqual(true)
    })

    test("Return an empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleLoading(state as StateSchema)).toEqual(false)
    })
})

describe("getArticleError test", () => {
    test("Return success article error", () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                error: "some error",
            },
        }
        expect(getArticleError(state as StateSchema)).toEqual("some error")
    })

    test("Return an empty state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleError(state as StateSchema)).toEqual(undefined)
    })
})
