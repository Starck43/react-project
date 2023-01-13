import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Comment } from "@/entities/comment"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator"

import { ArticleCommentsCard } from "./ArticleCommentsCard"

export default {
    title: "pages/Articles/ArticleCommentsCard",
    component: ArticleCommentsCard,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof ArticleCommentsCard>

const Template: ComponentStory<typeof ArticleCommentsCard> = (args) => <ArticleCommentsCard {...args} />

const comments: Comment[] = [
    {
        id: "1",
        text: "some comment",
        user: {
            id: "1",
            username: "admin",
        },
    },
    {
        id: "2",
        text: "some comment 2",
        user: {
            id: "1",
            username: "admin",
        },
    },
    {
        id: "3",
        text: "some comment 3",
        user: {
            id: "2",
            username: "guest",
        },
    },
]

const entities = {
    0: comments[0],
    1: comments[1],
    2: comments[2],
}

export const Default = Template.bind({})
Default.args = {
    articleId: "1",
}

Default.decorators = [
    StoreDecorator({
        comments: {
            data: comments,
            ids: [0, 1, 2],
            entities,
        },
    }),
]
