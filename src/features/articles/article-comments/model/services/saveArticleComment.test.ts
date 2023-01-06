import { TestAsyncFunc } from "@/shared/lib/tests/TestAsyncFunc"

import { saveArticleComment } from "./saveArticleComment"

const text = "Added new comment"

describe("NewCommentData loading test", () => {
    test("Success newComment fetching", async () => {
        const thunk = new TestAsyncFunc(saveArticleComment)
        thunk.api?.post.mockReturnValue(Promise.resolve({ text }))
        const res = await thunk.CallFunc(text)
        // console.log(res)

        expect(thunk.api?.get).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe("fulfilled")
        expect(res.payload).toEqual(text)
    })

    test("Failed newComment fetching", async () => {
        const thunk = new TestAsyncFunc(saveArticleComment)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const res = await thunk.CallFunc(text)
        expect(res.meta.requestStatus).toBe("rejected")

        // console.log(res)
    })
})
