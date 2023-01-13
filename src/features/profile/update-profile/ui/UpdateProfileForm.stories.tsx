import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Country } from "@/entities/country"

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator"
import Avatar from "@/shared/assets/icons/avatar-profile.png"

import { UpdateProfileForm } from "./UpdateProfileForm"

export default {
    title: "features/UpdateProfileForm",
    component: UpdateProfileForm,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof UpdateProfileForm>

const Template: ComponentStory<typeof UpdateProfileForm> = (args) => <UpdateProfileForm {...args} />

export const Default = Template.bind({})
Default.args = {
    show: true,
}
Default.decorators = [
    StoreDecorator({
        profile: {
            data: { id: "1" },
            form: {
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
