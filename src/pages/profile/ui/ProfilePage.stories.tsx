import React from "react"
import { ComponentMeta, Story } from "@storybook/react"

import { Country } from "@/entities/country"

import Avatar from "@/shared/assets/icons/avatar-profile.png"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator"

import ProfilePage from "./ProfilePage"

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof ProfilePage>

const Template: Story = (args) => <ProfilePage {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
    StoreDecorator({
        profile: {
            data: {
                name: "John",
                email: "admin@t.me",
                phone: "+79991234567",
                country: Country.RUSSIA,
                avatar: Avatar,
            },
        },
    }),
]
