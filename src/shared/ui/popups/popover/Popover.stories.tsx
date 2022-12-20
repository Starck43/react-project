import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {Button} from "@/shared/ui/button"

import {Popover} from "./Popover"


export default {
    title: "shared/popups/Popover",
    component: Popover,
    argTypes: {backgroundColor: {control: "color"}},
    args: {
        toggleElement: <Button>Menu</Button>,
        children: <h3>Popover title</h3>,
    },
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />

export const Default = Template.bind({})
