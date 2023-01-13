import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { SkeletonElementType } from "@/shared/ui/skeleton/const"

import { Skeleton } from "./Skeleton"

export default {
    title: "shared/Skeleton",
    component: Skeleton,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Title = Template.bind({})
Title.args = {
    width: "90%",
    height: "1.6em",
    elements: [SkeletonElementType.BLOCK],
}

export const Block = Template.bind({})
Block.args = {
    width: "90%",
    height: 200,
    elements: [SkeletonElementType.BLOCK],
}

export const AvatarWithCustomSize = Template.bind({})
AvatarWithCustomSize.args = {
    width: 150,
    height: 150,
    elements: [SkeletonElementType.AVATAR],
}

export const AvatarWithAutoSize = Template.bind({})
AvatarWithAutoSize.args = {
    rounded: true,
    avatarSize: "auto",
    elements: [SkeletonElementType.AVATAR],
}

export const Vertical = Template.bind({})
Vertical.args = {
    elements: [SkeletonElementType.AVATAR, SkeletonElementType.TITLE, SkeletonElementType.BLOCK],
    avatarSize: "sm",
    rounded: true,
}

export const Inlined = Template.bind({})
Inlined.args = {
    elements: [SkeletonElementType.AVATAR, SkeletonElementType.TITLE, SkeletonElementType.BLOCK],
    inlined: true,
    rounded: true,
    width: "30%",
    height: "200px",
}
