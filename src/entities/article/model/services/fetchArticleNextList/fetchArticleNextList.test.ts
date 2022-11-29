import {TestAsyncFunc} from "shared/lib/tests/test-async-func/TestAsyncFunc"

import {getArticlesLoading} from "../../selectors/article-list/getArticleListData"
import {fetchArticleList} from "../fetchArticleList/fetchArticleList"
import {fetchArticleNextList} from "./fetchArticleNextList"


jest.mock("../fetchArticleList/fetchArticleList")

describe("fetchArticleNextList test", () => {
    test("Success next page fetching", async () => {
        const thunk = new TestAsyncFunc(fetchArticleNextList, {
            articles: {
                ids: [],
                entities: {},
                page: 2,
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        })

        await thunk.CallFunc()

        expect(thunk.dispatch).toBeCalledTimes(4) // "pending", "fullfiled", fetchArticleList, articlesActions.setPage
        expect(fetchArticleList).toBeCalledWith({page: 3})
        // expect(res.payload).toEqual(profileValue)
    })

    test("no more pages", async () => {
        const thunk = new TestAsyncFunc(fetchArticleNextList, {
            articles: {
                ids: [],
                entities: {},
                page: 2,
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        })

        await thunk.CallFunc()

        expect(thunk.dispatch).toBeCalledTimes(2) // "pending", "fullfiled"
        expect(fetchArticleList).not.toHaveBeenCalled()
        // expect(res.payload).toEqual(profileValue)
    })

    test("page is loading", async () => {
        const thunk = new TestAsyncFunc(fetchArticleNextList, {
            articles: {
                ids: [],
                entities: {},
                page: 2,
                limit: 5,
                isLoading: true,
                hasMore: true,
            },
        })

        await thunk.CallFunc()

        expect(getArticlesLoading(thunk.getState())).toEqual(true)
    })
})
