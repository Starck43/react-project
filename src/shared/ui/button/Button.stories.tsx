import {ComponentMeta, Story} from "@storybook/react"
import React from "react"

import {ButtonFeature} from "./consts"

import {Button} from "./Button"


export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        bordered: {control: "boolean"},
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

export const Blank = Template.bind({})
Blank.args = {
    feature: ButtonFeature.BLANK,
}

export const Inverted = Template.bind({})
Inverted.args = {
    feature: ButtonFeature.INVERTED,
}

export const BlankDisabled = Template.bind({})
BlankDisabled.args = {
    feature: ButtonFeature.BLANK,
    disabled: true,
}
