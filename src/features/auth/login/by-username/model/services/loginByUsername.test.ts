import {userActions} from "entities/user"

import {TestAsyncFunc} from "shared/lib/tests/test-async-func/TestAsyncFunc"

import {loginByUsername} from "./loginByUsername"


const userValue = {
    username: "admin", password: "admin", id: "1",
}

describe("loginByUsername test", () => {
    test("Success login", async () => {
        const thunk = new TestAsyncFunc(loginByUsername)
        thunk.api?.post.mockReturnValue(Promise.resolve({data: userValue}))
        const res = await thunk.CallFunc(userValue)
        // console.log(res)

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(thunk.api?.post).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe("fulfilled")
        expect(res.payload).toEqual(userValue)
    })

    test("Failed login", async () => {
        const thunk = new TestAsyncFunc(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}))
        const res = await thunk.CallFunc(userValue)
       // console.log(res)

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe("rejected")
        expect(res.payload).toBe("error")
    })
})


/*
// first test variant
describe("loginByUsername test", () => {
    let dispatch: Dispatch
    let getState: () => StateSchema

    beforeEach(
        () => {
            dispatch = jest.fn()
            getState = jest.fn()
        },
    )

    test("Success login", async () => {
        const userValue = {
            username: "admin", password: "admin", id: "1",
        }
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}))
        const action = loginByUsername(userValue)
        const res = await action(dispatch, getState, undefined)
        // console.log(res)

        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe("fulfilled")
        expect(res.payload).toEqual(userValue)
    })

    test("Failed login", async () => {
        const userValue = {
            username: "admin", password: "admin", id: "1",
        }
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))
        const action = loginByUsername(userValue)
        const res = await action(dispatch, getState, undefined)
        // console.log(res)

        expect(dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe("rejected")
        expect(res.payload).toBe("error")
    })
})
*/
