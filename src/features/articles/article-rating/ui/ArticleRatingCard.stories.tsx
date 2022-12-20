import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"

import ArticleRatingCard from "./ArticleRatingCard"

// TODO: make a story for ArticleRating
export default {
    title: "features/Article/RatingCard",
    component: ArticleRatingCard,
    argTypes: {backgroundColor: {control: "color"}},
    decorators: [
        StoreDecorator({
            user: {authData: {username: "admin", password: "admin"}},
        }),
    ],
} as ComponentMeta<typeof ArticleRatingCard>

const Template: ComponentStory<typeof ArticleRatingCard> = (args) => <ArticleRatingCard {...args} />

export const Default = Template.bind({})
Default.args = {
    articleId: "1",
}
Default.parameters = {
    mockData: [
        {
            url: `${process.env.API_SERVER}/article-ratings?userId=1&articleId=1`,
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
NoRate.args = {
    articleId: "1",
}
NoRate.parameters = {
    mockData: [
        {
            url: `${process.env.API_SERVER}/article-ratings?userId=1&articleId=1`,
            method: "GET",
            status: 200,
            response: [],
        },
    ],
}