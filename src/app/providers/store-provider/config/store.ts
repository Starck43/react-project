import {configureStore} from "@reduxjs/toolkit"
import {StateSchema} from "app/providers/store-provider/config/stateSchema"
import {counterReducer} from "entities/counter"


export function createStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {counter: counterReducer},
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
