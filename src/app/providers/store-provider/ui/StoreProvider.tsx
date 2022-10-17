import {ReactNode} from "react"
import {Provider} from "react-redux"
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit"

import {StateSchema} from "app/providers/store-provider/config/stateSchema"
import {createStore} from "app/providers/store-provider/config/store"


interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({children, initialState, asyncReducers}: StoreProviderProps) => {
    const store = createStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
