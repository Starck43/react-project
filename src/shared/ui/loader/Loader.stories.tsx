import {ComponentMeta, Story} from "@storybook/react"
import React from "react"

import {Loader} from "./Loader"


export default {
    title: "shared/Loader",
    component: Loader,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Loader>

const Template: Story = (args) => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {}
