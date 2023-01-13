import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Country } from "@/entities/country"

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator"
import Avatar from "@/shared/assets/icons/avatar-profile.png"

import { ProfileCard } from "./ProfileCard"

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Default = Template.bind({})
Default.args = {
    id: "1",
}

Default.decorators = [
    StoreDecorator({
        profile: {
            data: {
                id: "1",
                name: "John",
                email: "admin@t.me",
                phone: "+79991234567",
                country: Country.RUSSIA,
                avatar: Avatar,
            },
        },
    }),
]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
    StoreDecorator({
        profile: {
            isLoading: true,
        },
    }),
]

export const Error = Template.bind({})
Error.args = {}
Error.decorators = [
    StoreDecorator({
        profile: {
            error: "some error",
        },
    }),
]
