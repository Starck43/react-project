import React from "react"
import {ComponentMeta, Story} from "@storybook/react"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator"

import {LoginSwitcher} from "./LoginSwitcher"


export default {
    title: "shared/Login Switcher",
    component: LoginSwitcher,
    argTypes: {backgroundColor: {control: "color"}},
    decorators: [
        StoreDecorator({}),
    ],
} as ComponentMeta<typeof LoginSwitcher>

const Template: Story = (args) => <LoginSwitcher {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Minified = Template.bind({})
Minified.args = {
    minified: true,
}
