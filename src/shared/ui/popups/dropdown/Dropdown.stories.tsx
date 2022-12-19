import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"
import {Button} from "@/shared/ui/button"

import {Dropdown} from "./Dropdown"


export default {
    title: "shared/popups/Dropdown",
    component: Dropdown,
    argTypes: {backgroundColor: {control: "color"}},
    args: {
        control: <Button>Menu</Button>,
        items: [
            {
                value: "item 1",
            },
            {
                value: "item 2",
            },
            {
                value: "item 3",
                disabled: true,
            },
        ],
    },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {}
