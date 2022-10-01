import {ComponentMeta} from "@storybook/react"
import React from "react"

import HomePage from "./HomePage"


export default {
    title: "pages/HomePage",
    component: HomePage,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof HomePage>

const Template = (args: any) => <HomePage {...args} />

export const Default = Template.bind({})
Default.args = {}
