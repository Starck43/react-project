import {ComponentMeta} from "@storybook/react"
import React from "react"

import {Spinner} from "./Spinner"


export default {
    title: "widgets/Spinner",
    component: Spinner,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Spinner>

const Template = (args: any) => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {className: "lds-roller"}
