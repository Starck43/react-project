import { StateSchema } from "@/app/providers/store-provider"
import { getArticleCommentsData } from "./articleCommentsSlice"

const comments = [
    {
        id: "2",
        userId: "1",
        articleId: "4",
        text: "Some comment for article 4",
    },
    {
        id: "3",
        userId: "1",
        articleId: "5",
        text: "Some comment for article 5",
    },
]

const data = {
    ids: [comments[0].id, comments[1].id],
    entities: {
        [comments[0].id]: comments[0],
        [comments[1].id]: comments[1],
    },
    isLoading: false,
}

describe("getArticleCommentsData test", () => {
    test("select all", () => {
        const state: DeepPartial<StateSchema> = {
            comments: data,
        }
        expect(getArticleCommentsData.selectAll(state as StateSchema)).toStrictEqual(comments)
    })

    test("select Ids", () => {
        const state: DeepPartial<StateSchema> = {
            comments: data,
        }
        expect(getArticleCommentsData.selectIds(state as StateSchema)).toStrictEqual([comments[0].id, comments[1].id])
    })

    test("select by Id", () => {
        const state: DeepPartial<StateSchema> = {
            comments: data,
        }
        expect(getArticleCommentsData.selectById(state as StateSchema, comments[0].id)).toStrictEqual(comments[0])
    })

    test("status empty array", () => {
        const state: DeepPartial<StateSchema> = {
            comments: { ...data, ids: [], entities: {} },
        }
        expect(getArticleCommentsData.selectAll(state as StateSchema)).toStrictEqual([])
    })
})
