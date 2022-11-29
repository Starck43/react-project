import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {ArticleSearchControl} from "./ArticleSearchControl"


export default {
    title: "pages/Articles/SearchControl",
    component: ArticleSearchControl,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ArticleSearchControl>

const Template: ComponentStory<typeof ArticleSearchControl> = () => <ArticleSearchControl />

export const Default = Template.bind({})
Default.args = {}
