import {ComponentMeta} from "@storybook/react"
import React from "react"

import {Navbar} from "./Navbar"


export default {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Navbar>

const Template = (args: any) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {children: "Navbar"}
