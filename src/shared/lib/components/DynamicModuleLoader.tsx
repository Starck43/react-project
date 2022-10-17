import React, {FC, useEffect} from "react"
import {useDispatch, useStore} from "react-redux"
import {Reducer} from "@reduxjs/toolkit"

import {ReduxStoreWithManager} from "app/providers/store-provider"
import {StateSchemaKey} from "app/providers/store-provider/config/stateSchema"


export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [ StateSchemaKey, Reducer ]

interface DynamicModuleLoaderProps {
    reducers: ReducerList
    destroyOnUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {children, reducers, destroyOnUnmount = true} = props
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([ name, reducer ]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer)
            dispatch({type: `@INIT ${name} reducer`})
        })

        return () => {
            if (destroyOnUnmount) {
                Object.entries(reducers).forEach(([ name ]: ReducerListEntry) => {
                    store.reducerManager.remove(name)
                    dispatch({type: `@DESTROY ${name} reducer`})
                })
            }
        }
        // eslint-disable-next-line
    }, [])

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{children}</>
    )
}

export default DynamicModuleLoader
