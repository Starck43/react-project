import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { NavLink } from "./NavLink"

import ArrowIcon from "./assets/arrow-shevron-left.svg"

export default {
    title: "shared/NavigationLink",
    component: NavLink,
    argTypes: { backgroundColor: { control: "color" } },
    args: {
        to: "#",
        title: <h5>Link</h5>,
        Icon: ArrowIcon,
        variant: "primary",
    },
} as ComponentMeta<typeof NavLink>

const Template: ComponentStory<typeof NavLink> = (args) => <NavLink {...args} />

export const Clear = Template.bind({})
Clear.args = {
    feature: "clear",
}

export const Negatived = Template.bind({})
Negatived.args = {
    feature: "inverted",
}

export const Underlined = Template.bind({})
Underlined.args = {
    feature: "underlined",
}

export const BorderedAndRounded = Template.bind({})
BorderedAndRounded.args = {
    feature: "bordered",
    rounded: true,
}

export const Reversed = Template.bind({})
Reversed.args = {
    reverse: true,
}
