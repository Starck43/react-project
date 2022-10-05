import {createSelector} from "@reduxjs/toolkit"
import {CounterSchema} from "entities/counter"
import {getCounter} from "entities/counter/model/selectors/getCounter/getCounter"

// createSelector API, which generates memoized selector functions.
// createSelector accepts one or more "input" selectors, which extract values from arguments,
// and an "output" selector that receives the extracted values and should return a derived value
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
)
