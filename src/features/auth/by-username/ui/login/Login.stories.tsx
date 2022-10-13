import {ComponentMeta, ComponentStory} from "@storybook/react"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator"

import {Login} from "./Login"


export default {
    title: "features/Login",
    component: Login,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = () => <Login />

export const Default = Template.bind({})
Default.decorators = [ StoreDecorator({login: {username: "admin", password: "admin"}}) ]

export const Error = Template.bind({})
Error.decorators = [ StoreDecorator({
    login: {
        username: "admin",
        password: "admin",
        error: "Error",
    },
}) ]

export const Loading = Template.bind({})
Loading.decorators = [ StoreDecorator({login: {isLoading: true}}) ]
