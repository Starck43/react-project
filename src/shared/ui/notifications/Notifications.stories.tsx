import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {Notifications} from "./Notifications"


export default {
    title: "shared/Notifications",
    component: Notifications,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Notifications>

const Template: ComponentStory<typeof Notifications> = (args) => <Notifications {...args} />

export const Default = Template.bind({})
Default.args = {}
