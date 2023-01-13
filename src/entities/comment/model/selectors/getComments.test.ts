import { StateSchema } from "@/app/providers/store-provider"

import type { Comment } from "../types/comment"
import { getCommentsLoading, getCommentsError } from "../selectors/getComments"

const comments: Comment[] = [
    {
        id: "1",
        text: "new comment 1",
        user: { id: "3" },
    },
    {
        id: "2",
        text: "new comment 2",
        user: { id: "3" },
    },
]

describe("CommentsData test", () => {
    test("Return loading status", () => {
        const state: DeepPartial<StateSchema> = {
            comments: { data: comments, isLoading: true },
        }
        expect(getCommentsLoading(state as StateSchema)).toEqual(true)
    })

    test("Return comments error", () => {
        const state: DeepPartial<StateSchema> = {
            comments: {
                error: "some error",
            },
        }
        expect(getCommentsError(state as StateSchema)).toEqual("some error")
    })

    test("Return an empty comments state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getCommentsError(state as StateSchema)).toEqual(undefined)
    })
})
