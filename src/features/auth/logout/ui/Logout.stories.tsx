import { ComponentMeta, ComponentStory } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator"

import { Logout } from "./Logout"

export default {
    title: "features/Logout",
    component: Logout,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof Logout>

const Template: ComponentStory<typeof Logout> = (args) => <Logout {...args} />

export const Default = Template.bind({})
Default.args = {
    show: true,
    closeHandler: () => {},
}
Default.decorators = [
    StoreDecorator({
        user: { authData: { id: "1", username: "admin", password: "admin" } },
    }),
]
