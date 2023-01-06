import React from "react"
import { ComponentMeta, Story } from "@storybook/react"

import { ToggleButton, ToggleButtonProps } from "./ToggleButton"

export default {
    title: "shared/ToggleButton",
    component: ToggleButton,
    // argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ToggleButton>

const Template: Story = (args: ToggleButtonProps) => <ToggleButton {...args} />

export const Default = Template.bind({})
Default.args = {}
