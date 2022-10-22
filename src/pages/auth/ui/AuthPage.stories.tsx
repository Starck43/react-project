import React from "react"
import {ComponentMeta, Story} from "@storybook/react"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator"

import AuthPage from "./AuthPage"


export default {
    title: "pages/AuthPage",
    component: AuthPage,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof AuthPage>

const Template: Story = (args) => <AuthPage {...args} />

export const Login = Template.bind({})
Login.args = {}
Login.decorators = [ StoreDecorator({}) ]

export const Profile = Template.bind({})
Profile.args = {}
Profile.decorators = [ StoreDecorator({user: {userAuth: {username: "admin", password: "admin"}}}) ]
