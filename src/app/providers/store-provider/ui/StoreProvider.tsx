import {ReactNode} from "react"
import {Provider} from "react-redux"
import {DeepPartial} from "@reduxjs/toolkit"
import {StateSchema} from "app/providers/store-provider/config/stateSchema"
import {createStore} from "app/providers/store-provider/config/store"


interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = ({children, initialState}: StoreProviderProps) => {
    const store = createStore(initialState as StateSchema)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
