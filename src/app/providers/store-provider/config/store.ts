import {configureStore, ReducersMapObject} from "@reduxjs/toolkit"
import {StateSchema} from "app/providers/store-provider/config/stateSchema"
import {counterReducer} from "entities/counter"
import {userReducer} from "entities/user"
import {loginReducer} from "features/auth/by-username"


export function createStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
        devTools: __IS_DEV__,
    })
}
