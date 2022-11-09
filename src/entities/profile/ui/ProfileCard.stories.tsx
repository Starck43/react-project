import {ComponentMeta, Story} from "@storybook/react"

import {Country} from "entities/country"

import {StoreDecorator} from "shared/config/storybook/StoreDecorator"
import Avatar from "shared/assets/icons/avatar-profile.png"

import {ProfileCard} from "./ProfileCard"


export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ProfileCard>

const Template: Story = (args) => <ProfileCard {...args} />

export const Default = Template.bind({})
Default.args = {
    data: {
        id: "1",
        name: "John",
        email: "admin@t.me",
        phone: "+79991234567",
        country: Country.RUSSIA,
        avatar: Avatar,
    },
}
Default.decorators = [
    StoreDecorator({
        profile: {
            data: {
                username: "admin",
                email: "admin@t.me",
            },
        },
    }),
]

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true,
}

export const Error = Template.bind({})
Error.args = {
    error: "some error",
}
