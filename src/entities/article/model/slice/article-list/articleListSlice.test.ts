import { StateSchema } from "@/app/providers/store-provider"

import type { Article } from "../../types/article"
import { getArticlesData } from "./articleListSlice"

const articles: Article[] = [
    {
        id: "1",
        title: "Javascript news",
        subtitle: "Что нового в JS за 2022 год?",
    },
    {
        id: "2",
        title: "Javascript news",
        subtitle: "Что нового в JS за 2022 год?",
    },
]

const data = {
    ids: [articles[0].id, articles[1].id],
    entities: {
        [articles[0].id]: articles[0],
        [articles[1].id]: articles[1],
    },
}

describe("getArticleListData test", () => {
    test("select all", () => {
        const state: DeepPartial<StateSchema> = {
            articles: data,
        }
        expect(getArticlesData.selectAll(state as StateSchema)).toStrictEqual(articles)
    })

    test("select Ids", () => {
        const state: DeepPartial<StateSchema> = {
            articles: data,
        }
        expect(getArticlesData.selectIds(state as StateSchema)).toStrictEqual([articles[0].id, articles[1].id])
    })

    test("select by Id", () => {
        const state: DeepPartial<StateSchema> = {
            articles: data,
        }
        expect(getArticlesData.selectById(state as StateSchema, articles[0].id)).toStrictEqual(articles[0])
    })

    test("status empty array", () => {
        const state: DeepPartial<StateSchema> = {
            articles: { ...data, ids: [], entities: {} },
        }
        expect(getArticlesData.selectAll(state as StateSchema)).toStrictEqual([])
    })
})
