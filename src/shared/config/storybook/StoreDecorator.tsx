import {Story} from "@storybook/react"

import {StateSchema, StoreProvider} from "app/providers/store-provider"
import {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {viewerReducer} from "entities/viewer"
import {loginReducer} from "features/auth/by-username/model/slice/loginSlice"

import "app/styles/index.sass"


const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
    viewer: viewerReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent />
    </StoreProvider>
)
