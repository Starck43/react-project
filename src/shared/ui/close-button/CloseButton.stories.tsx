import {ComponentMeta} from "@storybook/react"
import React from "react"

import {ButtonProps, CloseButton} from "./CloseButton"


export default {
    title: "shared/Close button",
    component: CloseButton,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof CloseButton>

const Template = (args: ButtonProps) => <CloseButton {...args} />

export const Default = Template.bind({})
Default.args = {}
