import React from "react"
import {ComponentMeta, Story} from "@storybook/react"
import Sidebar, {SidebarProps} from "./Sidebar"


export default {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Sidebar>

const Template: Story = (args: SidebarProps) => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {}
