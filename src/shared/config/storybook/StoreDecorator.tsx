import {Story} from "@storybook/react"

import {StateSchema, StoreProvider} from "@/app/providers/store-provider"

import {profileReducer} from "@/entities/profile"
import {loginReducer} from "@/features/auth"
import {articleReducer} from "@/entities/article"
import {newCommentReducer} from "@/entities/comment"
import {articleCommentsReducer} from "@/features/articles"

import {ReducerList} from "@/shared/lib/components/DynamicModuleLoader"

import "@/app/styles/index.sass"


const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
    profile: profileReducer,
    article: articleReducer,
    comments: articleCommentsReducer,
    newComment: newCommentReducer,
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (
    StoryComponent: Story,
) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent />
    </StoreProvider>
)
