import { TestAsyncFunc } from "@/shared/lib/tests/TestAsyncFunc"
import { fetchArticleCommentsData } from "./fetchArticleCommentsData"

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

describe("ArticleCommentsData test", () => {
    test("Success comment loading", async () => {
        const thunk = new TestAsyncFunc(fetchArticleCommentsData)
        thunk.api?.get.mockReturnValue(Promise.resolve({ data: comments[0] }))
        const res = await thunk.CallFunc("some articleId") // parameter is articleId in payload creator func

        expect(thunk.api?.get).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe("fulfilled")
        expect(res.payload).toEqual(comments[0])
    })

    test("Failed comments loading", async () => {
        const thunk = new TestAsyncFunc(fetchArticleCommentsData)
        thunk.api?.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const res = await thunk.CallFunc("some articleId") // parameter is articleId in payload creator func

        expect(thunk.api?.get).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe("rejected")
        expect(res.payload).toEqual("error")
    })
})
