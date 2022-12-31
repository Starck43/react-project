import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"
import {buildAbsoluteUrl} from "@/shared/lib/helpers/urls"

import {NotificationsPopup} from "./NotificationsPopup"


export default {
    title: "features/NotificationsPopup",
    component: NotificationsPopup,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof NotificationsPopup>

const Template: ComponentStory<typeof NotificationsPopup> = (args) => <NotificationsPopup {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
    StoreDecorator({
        user: {authData: {id: "1", username: "admin", password: "admin"}},
    }),
]

Default.parameters = {
    mockData: [
        {
            url: buildAbsoluteUrl(__API__, "notifications"),
            method: "GET",
            status: 200,
            response: [
                {
                    id: "1",
                    title: "Уведомление 1",
                    description: "Произошло какое-то событие",
                    userId: "1",
                },
                {
                    id: "2",
                    title: "Уведомление 2",
                    description: "Произошло какое-то событие",
                    userId: "1",
                    href: "http://localhost:3000/home",
                },
                {
                    id: "3",
                    title: "Уведомление 3",
                    description: "Произошло какое-то событие",
                    userId: "1",
                    href: "about",
                },
            ],
        },
    ],
}

export const EmptyList = Template.bind({})
EmptyList.args = {}
EmptyList.decorators = [
    StoreDecorator({
        user: {authData: {id: "1", username: "admin", password: "admin"}},
    }),
]
