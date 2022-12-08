import React from "react"
import {ComponentMeta, Story} from "@storybook/react"
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"

import Navbar from "./Navbar"


export default {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Navbar>

const Template: Story = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [ StoreDecorator({}) ]

export const Authenticated = Template.bind({})
Authenticated.args = {}
Authenticated.decorators = [ StoreDecorator({user: {authData: {username: "admin", password: "admin"}}}) ]
