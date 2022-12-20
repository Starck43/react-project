import {ReactNode, useEffect} from "react"
import {useDispatch, useStore} from "react-redux"
import {Reducer} from "@reduxjs/toolkit"

import {StateSchemaKey, ReduxStoreWithManager, StateSchema} from "@/app/providers/store-provider"


export type ReducerList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
    children: ReactNode
    reducers: ReducerList
    destroyOnUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {children, reducers, destroyOnUnmount} = props
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        const initReducerMap = store.reducerManager.getReducerMap()
        Object.entries(reducers).forEach(([ name, reducer ]) => {
            if (!initReducerMap[name as StateSchemaKey]) {
                store.reducerManager.add(name as StateSchemaKey, reducer)
                dispatch({type: `@INIT ${name} reducer`})
            }
        })

        return () => {
            if (destroyOnUnmount) {
                Object.entries(reducers).forEach(([ name ]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({type: `@DESTROY ${name} reducer`})
                })
            }
        }
        // eslint-disable-next-line
    }, [])

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (<>{children}</>)
}

export default DynamicModuleLoader
