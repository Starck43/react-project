import {ValidateCommentError} from "../types/comments"
import {validateCommentsData} from "./validateCommentsData"


const data = {
    id: "1",
    user: {
        username: "admin",
        password: "admin",
    },
    text: "Some comment",
}

describe("CommentData validation test", () => {
    test("Success validation", async () => {
        const res = validateCommentsData(data)
        expect(res).toEqual([])
    })

    test("No data", async () => {
        const res = validateCommentsData()
        expect(res).toEqual([ ValidateCommentError.NO_DATA ])
    })

    test("All errors", async () => {
        const res = validateCommentsData({})
        expect(res).toEqual([
            ValidateCommentError.NO_COMMENT,
        ])
    })

    test("Empty comment", async () => {
        const res = validateCommentsData({...data, text: ""})
        expect(res).toEqual([ ValidateCommentError.NO_COMMENT ])
    })
})
