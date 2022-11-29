import {TestAsyncFunc} from "shared/lib/tests/test-async-func/TestAsyncFunc"

import {fetchArticleCommentsData} from "./fetchArticleCommentsData"


const data = {
    id: "1",
    user: {
        username: "admin",
        password: "admin",
    },
    text: "Some comment",
}

describe("CommentsData loading test", () => {
/*

    test("Success comments fetching", async () => {
        const thunk = new TestAsyncFunc(fetchCommentsData)
        thunk.api?.get.mockReturnValue(Promise.resolve({data}))
        const res = await thunk.CallFunc()
        // console.log(res)

        expect(thunk.api?.get).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe("fulfilled")
        expect(res.payload).toEqual(data)
    })

    test("Failed comments fetching", async () => {
        const thunk = new TestAsyncFunc(fetchCommentsData)
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}))
        const res = await thunk.CallFunc()
        expect(res.meta.requestStatus).toBe("rejected")
    })
*/

})
