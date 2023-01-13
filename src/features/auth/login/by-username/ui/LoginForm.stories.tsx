import { ComponentMeta, ComponentStory } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator"

import LoginForm from "./LoginForm"

export default {
    title: "features/LoginByUsername",
    component: LoginForm,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [StoreDecorator({ login: { username: "admin", password: "admin" } })]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [
    StoreDecorator({
        login: {
            username: "admin",
            password: "admin",
            error: "Error",
        },
    }),
]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({ login: { isLoading: true } })]
