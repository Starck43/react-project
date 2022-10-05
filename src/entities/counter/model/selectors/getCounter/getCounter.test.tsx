import {DeepPartial} from "@reduxjs/toolkit"
import {StateSchema} from "app/providers/store-provider"
import {getCounter} from "entities/counter/model/selectors/getCounter/getCounter"


describe("RTK Counter tests", () => {
test("getting counter value", () => {
    const state: DeepPartial<StateSchema> = {counter: {value: 100}}
        expect(getCounter(state as StateSchema)).toEqual({value: 100})
})
})
