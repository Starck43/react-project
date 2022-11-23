import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {ArticleDetailsSkeleton} from "./ArticleDetailsSkeleton"


export default {
    title: "entities/Article/Skeleton",
    component: ArticleDetailsSkeleton,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ArticleDetailsSkeleton>

const Template: ComponentStory<typeof ArticleDetailsSkeleton> = (args) => <ArticleDetailsSkeleton {...args} />

export const Default = Template.bind({})
Default.args = {}
