import { TestAsyncFunc } from "@/shared/lib/tests/TestAsyncFunc"

import { saveArticleComment } from "./saveArticleComment"

const comment = {
    userId: "1",
    articleId: "1",
    text: "Added new comment",
}

describe("NewCommentData loading test", () => {
    test("Success newComment fetching", async () => {
        const thunk = new TestAsyncFunc(saveArticleComment, {
            user: { authData: { id: comment.userId } },
            article: { data: { id: comment.articleId } },
        })
        thunk.api?.post.mockReturnValue(Promise.resolve({ data: comment }))
        const res = await thunk.CallFunc(comment.text)
        // eslint-disable-next-line no-console
        console.log(res)

        expect(thunk.dispatch).toBeCalledTimes(3)
        expect(res.meta.requestStatus).toBe("fulfilled")
        expect(res.payload).toEqual(comment)
    })

    test("Failed newComment fetching", async () => {
        const thunk = new TestAsyncFunc(saveArticleComment, {
            // user: { authData: { id: comment.userId } },
            article: { data: { id: comment.articleId } },
        })
        thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }))
        const res = await thunk.CallFunc(comment.text)
        // eslint-disable-next-line no-console
        console.log(res)

        expect(thunk.dispatch).toBeCalledTimes(2)
        expect(res.meta.requestStatus).toBe("rejected")
    })
})
