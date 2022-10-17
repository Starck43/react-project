import React from "react"
import {ComponentMeta} from "@storybook/react"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator"

import {Navbar} from "./Navbar"


export default {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Navbar>

const Template = (args: any) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [ StoreDecorator({}) ]

export const Authenticated = Template.bind({})
Authenticated.args = {}
Authenticated.decorators = [ StoreDecorator({user: {userAuth: {username: "admin", password: "admin"}}}) ]
