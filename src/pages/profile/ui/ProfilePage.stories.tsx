import React from "react"
import {ComponentMeta, Story} from "@storybook/react"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator"

import ProfilePage from "./ProfilePage"


export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ProfilePage>

const Template: Story = (args) => <ProfilePage {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
    StoreDecorator({
        user: {authData: {username: "admin", password: "admin"}},
        profile: {
            data: {
                username: "admin",
                email: "admin@t.me",
            },
        },
    }),
]
