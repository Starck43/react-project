import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { ArticleListSkeleton } from "./ArticleListSkeleton"

export default {
    title: "entities/Article/list/Skeleton",
    component: ArticleListSkeleton,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof ArticleListSkeleton>

const Template: ComponentStory<typeof ArticleListSkeleton> = (args) => <ArticleListSkeleton {...args} />

export const Default = Template.bind({})
Default.args = {}
