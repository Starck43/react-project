import { StateSchema } from "@/app/providers/store-provider"
import { getNewCommentText, getNewCommentError } from "./getNewComment"

const text = "new comment"

describe("NewCommentData test", () => {
    test("Return success newComment data", () => {
        const state: DeepPartial<StateSchema> = {
            newComment: { text },
        }
        expect(getNewCommentText(state as StateSchema)).toEqual(text)
    })

    test("Return an empty newComment state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getNewCommentText(state as StateSchema)).toEqual("")
    })
})

describe("NewCommentError test", () => {
    test("Return success newComment error", () => {
        const state: DeepPartial<StateSchema> = {
            newComment: {
                error: "some error",
            },
        }
        expect(getNewCommentError(state as StateSchema)).toEqual("some error")
    })

    test("Return an empty newComment state", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getNewCommentError(state as StateSchema)).toEqual(undefined)
    })
})
