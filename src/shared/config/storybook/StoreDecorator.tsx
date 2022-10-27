import {Story} from "@storybook/react"

import {StateSchema, StoreProvider} from "app/providers/store-provider"
import {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {profileReducer} from "entities/profile"
import {loginReducer} from "features/auth/login/by-username/model/slice/loginSlice"

import "app/styles/index.sass"


const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
    profile: profileReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent />
    </StoreProvider>
)
