import React from "react"
import {ComponentMeta, Story} from "@storybook/react"
import {Theme} from "app/providers/theme-provider"
import {UseThemeResult} from "app/providers/theme-provider/lib/useTheme"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator"

import {LoginSwitcher} from "./LoginSwitcher"


export default {
    title: "shared/Login switcher",
    component: LoginSwitcher,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof LoginSwitcher>

const Template: Story = (args) => <LoginSwitcher {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [ StoreDecorator({}) ]

export const Minified = Template.bind({})
Minified.args = {
    minified: true,
}
Minified.decorators = [ StoreDecorator({}) ]
