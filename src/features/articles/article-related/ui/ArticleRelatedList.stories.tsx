import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {ArticleRelatedList} from "./ArticleRelatedList"


export default {
    title: "pages/Articles/RelatedCard",
    component: ArticleRelatedList,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ArticleRelatedList>

const Template: ComponentStory<typeof ArticleRelatedList> = (args) => <ArticleRelatedList {...args} />

export const Default = Template.bind({})
Default.args = {}
