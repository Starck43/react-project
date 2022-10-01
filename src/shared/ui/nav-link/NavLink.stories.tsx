import {ComponentMeta} from "@storybook/react"
import React from "react"

import {NavLink, NavLinkProps, NavLinkTheme} from "./NavLink"


export default {
    title: "shared/Navigation link",
    component: NavLink,
    argTypes: {backgroundColor: {control: "color"}},
    args: {to: "/"},
} as ComponentMeta<typeof NavLink>

const Template = (args: NavLinkProps) => <NavLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: "Link Primary",
    theme: NavLinkTheme.PRIMARY,
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: "Link Secondary",
    theme: NavLinkTheme.SECONDARY,
}
