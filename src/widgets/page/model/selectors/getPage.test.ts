import { StateSchema } from "@/app/providers/store-provider"
import { getPageScroll, getPageByPath } from "../selectors/getPage"

describe("getPage test", () => {
    test("page scroll", () => {
        const state: DeepPartial<StateSchema> = {
            page: { scroll: { home: 100 } },
        }
        expect(getPageScroll(state as StateSchema)).toEqual({ home: 100 })
    })

    test("page scroll by path", () => {
        const state: DeepPartial<StateSchema> = {
            page: { scroll: { articles: 200 } },
        }
        expect(getPageByPath(state as StateSchema, "articles")).toEqual(200)
    })
})
