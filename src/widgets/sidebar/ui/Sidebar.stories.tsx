import React from "react"
import {ComponentMeta, Story} from "@storybook/react"
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"
import Sidebar, {SidebarProps} from "./Sidebar"


export default {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Sidebar>

const Template: Story = (args: SidebarProps) => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
    StoreDecorator({
        user: {},
    }),
]

export const Authorized = Template.bind({})
Authorized.args = {}
Authorized.decorators = [
    StoreDecorator({
        user: {
            authData: {
                username: "admin",
                password: "admin",
            },
        },
    }),
]
