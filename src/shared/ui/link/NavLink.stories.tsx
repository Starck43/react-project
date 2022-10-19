import {ComponentMeta} from "@storybook/react"
import React from "react"

import {NavLink, NavLinkFeature, NavLinkProps} from "./NavLink"


export default {
    title: "shared/Navigation link",
    component: NavLink,
    argTypes: {backgroundColor: {control: "color"}},
    args: {to: "/"},
} as ComponentMeta<typeof NavLink>

const Template = (args: NavLinkProps) => <NavLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: "Link",
    feature: NavLinkFeature.CLEAR,
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: "Link",
    feature: NavLinkFeature.UNDERLINED,
}
