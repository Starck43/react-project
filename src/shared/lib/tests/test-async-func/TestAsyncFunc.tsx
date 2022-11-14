import {AsyncThunkAction} from "@reduxjs/toolkit"
import axios, {AxiosStatic} from "axios"

import {StateSchema} from "app/providers/store-provider"


type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) =>
    AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>


jest.mock("axios")

const mockedAxios = jest.mocked(axios, true)

export class TestAsyncFunc<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>
    api: jest.MockedFunctionDeep<AxiosStatic>
    navigate: jest.MockedFn<any>

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>, state?: DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn(() => state as StateSchema)
        this.navigate = jest.fn()
        this.api = mockedAxios
    }

    async CallFunc(arg: Arg) {
        const action = this.actionCreator(arg)
        const res = await action(
            this.dispatch,
            this.getState,
            {
                api: this.api,
                // navigate: this.navigate,
            },
        )
        return res
    }
}
