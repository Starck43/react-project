import React from "react"
import { ComponentMeta, Story } from "@storybook/react"

import { ButtonFeature } from "./consts"
import { Button } from "./Button"

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        bordered: { control: "boolean" },
        // backgroundColor: {control: "color"},
    },
    args: {
        children: "Button",
    },
} as ComponentMeta<typeof Button>

const Template: Story = (args) => <Button {...args} />

export const Clear = Template.bind({})
Clear.args = {
    feature: ButtonFeature.CLEAR,
}

export const PrimaryBlank = Template.bind({})
PrimaryBlank.args = {
    variant: "primary",
    feature: ButtonFeature.BLANK,
}

export const PrimaryInverted = Template.bind({})
PrimaryInverted.args = {
    variant: "primary",
    feature: ButtonFeature.INVERTED,
}

export const PrimaryBlankDisabled = Template.bind({})
PrimaryBlankDisabled.args = {
    variant: "primary",
    feature: ButtonFeature.BLANK,
    disabled: true,
}
