import {Story} from "@storybook/react"

import {StateSchema, StoreProvider} from "app/providers/store-provider"

import {commentsReducer} from "entities/comment"
import {articleReducer} from "entities/article"
import {profileReducer} from "entities/profile"
import {loginReducer} from "features/auth/login/by-username/model/slice/loginSlice"
import {newCommentReducer} from "features/comments/new-comment"

import {ReducerList} from "shared/lib/components/DynamicModuleLoader"

import "app/styles/index.sass"


const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
    profile: profileReducer,
    article: articleReducer,
    comments: commentsReducer,
    newComment: newCommentReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent />
    </StoreProvider>
)
