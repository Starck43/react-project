import {ComponentMeta, ComponentStory, Story} from "@storybook/react"

import {NotificationItem} from "./NotificationItem"


export default {
    title: "entities/Notifications/Item",
    component: NotificationItem,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />

export const Default = Template.bind({})
Default.args = {
    item: {
        id: "2",
        title: "Уведомление 2",
        description: "Произошло какое-то событие",
        href: "http://localhost:3000/admin",
    },
}
Default.decorators = []
