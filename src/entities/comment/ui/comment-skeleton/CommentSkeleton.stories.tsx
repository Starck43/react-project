import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { CommentSkeleton } from "./CommentSkeleton"

export default {
    title: "entities/Comments/Skeleton",
    component: CommentSkeleton,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof CommentSkeleton>

const Template: ComponentStory<typeof CommentSkeleton> = (args) => <CommentSkeleton {...args} />

export const Default = Template.bind({})
Default.args = {}
