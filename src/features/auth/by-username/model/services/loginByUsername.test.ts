import axios from "axios"
import {userActions} from "entities/user"
import {loginByUsername} from "features/auth/by-username/model/services/loginByUsername"
import {TestAsyncFunc} from "shared/lib/tests/test-async-func/TestAsyncFunc"


jest.mock("axios")
const mockedAxios = jest.mocked(axios, true)

const userValue = {
    username: "admin", password: "admin", id: "1",
}

describe("loginByUsername test", () => {
    test("Success login", async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}))
        const thunk = new TestAsyncFunc(loginByUsername)
        const res = await thunk.CallFunc(userValue)
        // console.log(res)

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe("fulfilled")
        expect(res.payload).toEqual(userValue)
    })

    test("Failed login", async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}))
        const thunk = new TestAsyncFunc(loginByUsername)
        const res = await thunk.CallFunc(userValue)
       // console.log(res)

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
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
