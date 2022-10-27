import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import avatar from "./avatar.png"
import {Avatar} from "./Avatar"


export default {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
// @ts-ignore
    size: 200, src: "",
}

export const Authenticated = Template.bind({})
Authenticated.args = {src: avatar, rounded: true}
