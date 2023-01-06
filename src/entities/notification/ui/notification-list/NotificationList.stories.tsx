import { ComponentMeta, ComponentStory } from "@storybook/react"
import { buildAbsoluteUrl } from "@/shared/lib/helpers/urls"

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator"

import { NotificationList } from "./NotificationList"

export default {
    title: "entities/Notifications/List",
    component: NotificationList,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
)

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [StoreDecorator({})]
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
