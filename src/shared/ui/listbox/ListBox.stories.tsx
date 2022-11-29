import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import ListBox from "./ListBox"


export default {
    title: "shared/ListBox",
    component: ListBox,
    argTypes: {
        backgroundColor: {control: "color"},
        value: {control: {type: "text"}},
    },
    args: {
        compact: false,
        label: "Выберите персонаж",
        items: [
            {value: "1", content: "Durward Reynolds"},
            {value: "2", content: "Kenton Towne"},
            {value: "3", content: "Therese Wunsch"},
            {value: "4", content: "Benedict Kessler"},
        ],
        onChange: () => null,
    },
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Default = Template.bind({})
Default.args = {
    selectedOption: {value: "4", content: "Benedict Kessler"},
    defaultOption: undefined,
}

export const TopOpen = Template.bind({})
TopOpen.args = {
    compact: false,
    selectedOption: {value: "4", content: "Benedict Kessler"},
    defaultOption: undefined,
    position: "top_right",
}

export const Compact = Template.bind({})
Compact.args = {
    compact: true,
    selectedOption: undefined,
    defaultOption: undefined,
}

export const CompactAndRounded = Template.bind({})
CompactAndRounded.args = {
    compact: true,
    rounded: true,
    selectedOption: undefined,
    defaultOption: undefined,
}


export const WithStyles = Template.bind({})
WithStyles.args = {
    selectedOption: undefined,
    defaultOption: {value: "3", content: "Therese Wunsch"},
    style: {
        minWidth: "12rem",
    },
}
