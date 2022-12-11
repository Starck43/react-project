import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {Rate} from "./Rate"


export default {
    title: "shared/Rate",
    component: Rate,
    argTypes: {backgroundColor: {control: "color"}},
    parameters: {
        actions: {},
    },
} as ComponentMeta<typeof Rate>

const Template: ComponentStory<typeof Rate> = (args) => <Rate {...args} />

export const Default = Template.bind({})
Default.args = {
    size: "large",
}

export const Selected = Template.bind({})
Selected.args = {
    size: "large",
    value: 4,
}
