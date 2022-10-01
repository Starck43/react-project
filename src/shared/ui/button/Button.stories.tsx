import {ComponentMeta} from "@storybook/react"
import React from "react"

import {Button, ThemeButton} from "./Button"


export default {
    title: "shared/Button",
    component: Button,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Button>

const Template = (args: any) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {children: "Button"}

export const Blank = Template.bind({})
Blank.args = {
    children: "Button",
    theme: ThemeButton.BLANK,
}
