import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {ArticleRelatedCard} from "./ArticleRelatedCard"


export default {
    title: "pages/Articles/RelatedCard",
    component: ArticleRelatedCard,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ArticleRelatedCard>

const Template: ComponentStory<typeof ArticleRelatedCard> = (args) => <ArticleRelatedCard {...args} />

export const Default = Template.bind({})
Default.args = {}
