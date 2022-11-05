import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {ArticleSkeleton} from "./ArticleSkeleton"


export default {
    title: "entities/Article/Skeleton",
    component: ArticleSkeleton,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ArticleSkeleton>

const Template: ComponentStory<typeof ArticleSkeleton> = (args) => <ArticleSkeleton {...args} />

export const Default = Template.bind({})
Default.args = {}
