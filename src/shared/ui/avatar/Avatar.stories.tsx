import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import avatar from "../../assets/icons/avatar-profile.png"
import {Avatar} from "./Avatar"


export default {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {src: avatar, rounded: true}

export const Placeholder = Template.bind({})
Placeholder.args = {
// @ts-ignore
    size: 200, src: "",
}
