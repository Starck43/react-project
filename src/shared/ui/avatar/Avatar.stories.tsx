import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import avatar from "@/shared/assets/icons/avatar-profile.png"
import {Avatar} from "./Avatar"


export default {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
    src: avatar,
    title: "John Mconory",
}

export const PlaceholderWithCustomSize = Template.bind({})
PlaceholderWithCustomSize.args = {
// @ts-ignore
    src: "",
    size: 200,
}

export const InlinedXS = Template.bind({})
InlinedXS.args = {
// @ts-ignore
    src: "",
    inlined: true,
    rounded: true,
    size: "xs",
    title: "John Mconory",
}

export const WithAvatarLG = Template.bind({})
WithAvatarLG.args = {
// @ts-ignore
    src: avatar,
    size: "lg",
    rounded: true,
    title: "John Mconory",
}

export const WithPlaceholderXS = Template.bind({})
WithPlaceholderXS.args = {
// @ts-ignore
    src: "",
    size: "xs",
    rounded: true,
    bordered: true,
    title: "John Mconory",
}
