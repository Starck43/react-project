import React from "react"
import {ComponentMeta, Story} from "@storybook/react"
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"

import {AuthPopup} from "./AuthPopup"


export default {
    title: "features/LoginSwitcher",
    component: AuthPopup,
    argTypes: {backgroundColor: {control: "color"}},
    decorators: [
        StoreDecorator({}),
    ],
} as ComponentMeta<typeof AuthPopup>

const Template: Story = (args) => <AuthPopup {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Minified = Template.bind({})
Minified.args = {
    minified: true,
}
