import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {Skeleton, SkeletonElementType} from "./Skeleton"


export default {
    title: "shared/Skeleton",
    component: Skeleton,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Title = Template.bind({})
Title.args = {
    width: "80%",
    height: "2.6em",
    elements: [ SkeletonElementType.BLOCK ],
}

export const Block = Template.bind({})
Block.args = {
    width: "80%",
    height: 300,
    elements: [ SkeletonElementType.BLOCK ],
}

export const Avatar = Template.bind({})
Avatar.args = {
    width: 150,
    height: 150,
    elements: [ SkeletonElementType.AVATAR ],
}

export const WithToElements = Template.bind({})
WithToElements.args = {
    elements: [ SkeletonElementType.AVATAR, SkeletonElementType.BLOCK ],
    inlined: true,
    rounded: true,
}

export const WithThreeElements = Template.bind({})
WithThreeElements.args = {
    elements: [ SkeletonElementType.AVATAR, SkeletonElementType.TITLE, SkeletonElementType.BLOCK ],
    inlined: true,
    rounded: true,
}
