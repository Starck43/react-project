import {ComponentMeta} from "@storybook/react"
import React from "react"

import {ToggleButton, ToggleButtonProps} from "./ToggleButton"


export default {
    title: "shared/Toggle button",
    component: ToggleButton,
    // argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ToggleButton>

const Template = (args: ToggleButtonProps) => <ToggleButton {...args} />

export const Default = Template.bind({})
Default.args = {}
