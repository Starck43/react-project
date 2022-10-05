import {counterReducer, CounterSchema} from "entities/counter"
import {counterActions} from "./counterSlice"

describe("getCounterValue test", () => {
	test("decrement test", () => {
		const state: CounterSchema = {value: 100}

		expect(counterReducer(state, counterActions.decrement())).toEqual({value: 99})
	})
	test("increment test", () => {
		const state: CounterSchema = {value: 100}

		expect(counterReducer(state, counterActions.increment())).toEqual({value: 101})
	})
	test("work with empty state test", () => {
		expect(counterReducer(undefined, counterActions.decrement())).toEqual({value: -1})
	})
})
