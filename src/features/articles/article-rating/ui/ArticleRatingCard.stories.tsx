import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import ArticleRatingCard from "./ArticleRatingCard"


export default {
    title: "features/Article/RatingCard",
    component: ArticleRatingCard,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ArticleRatingCard>

const Template: ComponentStory<typeof ArticleRatingCard> = (args) => <ArticleRatingCard {...args} />

export const Default = Template.bind({})
Default.args = {}
