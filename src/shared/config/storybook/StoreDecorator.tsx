import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit"
import {Story} from "@storybook/react"

import {StateSchema, StoreProvider} from "app/providers/store-provider"
import {loginReducer} from "features/auth/by-username/model/slice/loginSlice"

import "app/styles/index.sass"


const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {login: loginReducer}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent />
    </StoreProvider>
)
