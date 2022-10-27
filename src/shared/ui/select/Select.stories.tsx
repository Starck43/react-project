import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {Select} from "./Select"


export default {
    title: "shared/Select",
    component: Select,
    argTypes: {backgroundColor: {control: "color"}},
    args: {
        label: "Список",
        options: [
            {value: "option1", content: "option 1"},
            {value: "option2", content: "option 2"},
            {value: "option3", content: "option 3"},
        ],
    },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Compact = Template.bind({})
Compact.args = {compact: true}
