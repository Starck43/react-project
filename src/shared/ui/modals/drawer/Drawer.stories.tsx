import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {Drawer} from "./Drawer"


export default {
    title: "widgets/Drawer",
    component: Drawer,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

export const Default = Template.bind({})
Default.args = {}
