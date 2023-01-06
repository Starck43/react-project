import React from "react"
import { ComponentMeta, Story } from "@storybook/react"

import { Info, InfoProps } from "./Info"
import { InfoStatus } from "./consts"

export default {
    title: "shared/Info",
    component: Info,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof Info>

const Template: Story = (args: InfoProps) => <Info {...args} />

// TODO: add icon arg
export const Default = Template.bind({})
Default.args = {
    title: "Success",
    subTitle: "Some text here...",
    status: InfoStatus.DEFAULT,
}
export const Success = Template.bind({})
Success.args = {
    title: "Success",
    status: InfoStatus.SUCCESS,
}

export const Warning = Template.bind({})
Warning.args = {
    title: "Warning",
    status: InfoStatus.WARNING,
}

export const Error = Template.bind({})
Error.args = {
    title: "Error",
    status: InfoStatus.ERROR,
}

export const ErrorWithSubtitle = Template.bind({})
ErrorWithSubtitle.args = {
    subTitle: "Some description",
    status: InfoStatus.ERROR,
}
