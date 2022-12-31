import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"
import {buildAbsoluteUrl} from "@/shared/lib/helpers/urls"

import ArticleRatingCard from "./ArticleRatingCard"

// TODO: make a story for ArticleRating
export default {
    title: "features/Article/RatingCard",
    component: ArticleRatingCard,
    argTypes: {backgroundColor: {control: "color"}},
    args: {articleId: "1"},
    decorators: [
        StoreDecorator({
            user: {authData: {id: "1", username: "admin", password: "admin"}},
        }),
    ],
} as ComponentMeta<typeof ArticleRatingCard>

const Template: ComponentStory<typeof ArticleRatingCard> = (args) => <ArticleRatingCard {...args} />

export const WithRate = Template.bind({})
WithRate.args = {}
WithRate.parameters = {
    mockData: [
        {
            url: buildAbsoluteUrl(__API__, "article-ratings", {
                userId: 1,
                articleId: 1,
            }),
            method: "GET",
            status: 200,
            response: [
                {
                    value: 4,
                    feedback: "Excellent article!",
                },
            ],
        },
    ],
}

export const NoRate = Template.bind({})
NoRate.args = {}
NoRate.parameters = {
    mockData: [
        {
            url: buildAbsoluteUrl(__API__, "article-ratings", {
                userId: 1,
                articleId: 1,
            }),
            method: "GET",
            status: 200,
            response: [],
        },
    ],
}
