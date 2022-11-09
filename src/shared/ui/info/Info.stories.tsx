import {ComponentMeta, Story} from "@storybook/react"
import React from "react"
import {Info, InfoProps, InfoStatus} from "./Info"



export default {
    title: "shared/Info",
    component: Info,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Info>

const Template: Story = (args: InfoProps) => <Info {...args} />

// TODO: add icon arg
export const Success = Template.bind({})
Success.args = {
    title: "Success",
    subtitle: "Some description",
    status: InfoStatus.SUCCESS,
}

export const Warning = Template.bind({})
Warning.args = {
    title: "Warning",
    subtitle: "Some description",
    status: InfoStatus.WARNING,
}

export const Error = Template.bind({})
Error.args = {
    title: "Error",
    subtitle: "Some description",
    status: InfoStatus.ERROR,
}
