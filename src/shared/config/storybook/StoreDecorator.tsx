import {Story} from "@storybook/react"

import {StateSchema, StoreProvider} from "@/app/providers/store-provider"

import {profileReducer} from "@/entities/profile/storybook"
import {articleReducer, articlesReducer} from "@/entities/article/storybook"
import {newCommentReducer} from "@/entities/comment/storybook"

import {loginReducer} from "@/features/auth/storybook"
import {articleCommentsReducer} from "@/features/articles/storybook"

import {ReducerList} from "@/shared/lib/components/DynamicModuleLoader"


const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
    profile: profileReducer,
    article: articleReducer,
    articles: articlesReducer,
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
