import {ComponentMeta, Story} from "@storybook/react"
import React from "react"

import {Spinner} from "./Spinner"


export default {
    title: "shared/Spinner",
    component: Spinner,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Spinner>

const Template: Story = (args) => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {className: "lds-roller"}
