import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"

import Navbar from "./Navbar"


export default {
    title: "widgets/Navbar",
    component: Navbar,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [ StoreDecorator({}) ]

export const Authenticated = Template.bind({})
Authenticated.args = {}
Authenticated.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: "1",
                username: "admin",
                password: "admin",
                avatar: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
            },
        },
    }),
]
