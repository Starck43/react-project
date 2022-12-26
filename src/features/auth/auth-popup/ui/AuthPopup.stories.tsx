import React from "react"
import {ComponentMeta, Story} from "@storybook/react"
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"

import {AuthPopup} from "./AuthPopup"


export default {
    title: "features/AuthPopup",
    component: AuthPopup,
    argTypes: {backgroundColor: {control: "color"}},
    decorators: [ StoreDecorator({user: {}}) ],
} as ComponentMeta<typeof AuthPopup>

const Template: Story = (args) => <AuthPopup {...args} />

export const Default = Template.bind({})
Default.args = {
}

export const Authenticated = Template.bind({})
Authenticated.args = {
    minified: true,
}
Authenticated.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: "1",
                username: "admin",
            },
        },
    }),
]
