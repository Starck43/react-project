import React from "react"
import {ComponentMeta, Story} from "@storybook/react"
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"

import AuthPage from "./AuthPage"


export default {
    title: "pages/AuthPage",
    component: AuthPage,
    argTypes: {backgroundColor: {control: "color"}},
    decorators: [ StoreDecorator({}) ],
} as ComponentMeta<typeof AuthPage>

const Template: Story = (args) => <AuthPage {...args} />

export const Default = Template.bind({})
Default.args = {}
