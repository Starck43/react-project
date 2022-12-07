import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {NavMenu} from "./NavMenu"


export default {
    title: "widgets/NavMenu",
    component: NavMenu,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof NavMenu>

const Template: ComponentStory<typeof NavMenu> = (args) => <NavMenu {...args} />

export const Default = Template.bind({})
Default.args = {}
