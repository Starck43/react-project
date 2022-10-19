import React from "react"
import {ComponentMeta} from "@storybook/react"
import Sidebar from "./Sidebar"

// @6.5.13-alpha.0
export default {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Sidebar>

const Template = (args: any) => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {children: "Sidebar"}
