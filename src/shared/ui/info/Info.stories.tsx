import {ComponentMeta} from "@storybook/react"
import React from "react"
import {
    Info, InfoProps, InfoStatus,
} from "./Info"



export default {
    title: "shared/Info",
    component: Info,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Info>

const Template = (args: InfoProps) => <Info {...args} />


export const Default = Template.bind({})
Default.args = {
    children: "Default",
    status: InfoStatus.DEFAULT,
}

export const Success = Template.bind({})
Success.args = {
    children: "Success",
    status: InfoStatus.SUCCESS,
}

export const Warning = Template.bind({})
Warning.args = {
    children: "Warning",
    status: InfoStatus.WARNING,
}

export const Error = Template.bind({})
Error.args = {
    children: "Error",
    status: InfoStatus.ERROR,
}
