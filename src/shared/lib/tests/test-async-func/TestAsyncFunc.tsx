import {AsyncThunkAction, Dispatch} from "@reduxjs/toolkit"
import {StateSchema} from "app/providers/store-provider"


type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) =>
    AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

export class TestAsyncFunc<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async CallFunc(arg: Arg) {
        const action = this.actionCreator(arg)
        const res = await action(this.dispatch, this.getState, undefined)
        return res
    }
}
