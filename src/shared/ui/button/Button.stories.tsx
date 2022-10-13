import {ComponentMeta} from "@storybook/react"
import React from "react"

import {Button, ButtonFeature} from "./Button"


export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        bordered: {control: "boolean"},
        // backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof Button>

const Template = (args: any) => <Button {...args} />


export const Blank = Template.bind({})
Blank.args = {
    children: "Button",
    feature: ButtonFeature.BLANK,
}

export const Inverted = Template.bind({})
Inverted.args = {
    children: "Button",
    feature: ButtonFeature.INVERTED,
}

export const Disabled = Template.bind({})
Disabled.args = {
    children: "Button",
    disabled: true,
}
