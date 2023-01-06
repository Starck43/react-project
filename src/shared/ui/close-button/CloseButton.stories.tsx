import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { CloseButton } from "./CloseButton"

export default {
    title: "shared/Close button",
    component: CloseButton,
    argTypes: { backgroundColor: { control: "color" }, onClick: {} },
} as ComponentMeta<typeof CloseButton>

const Template: ComponentStory<typeof CloseButton> = (args) => (
    <CloseButton {...args} />
)

export const Default = Template.bind({})
Default.args = {}
