import {ComponentMeta, ComponentStory} from "@storybook/react"

import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"

import {NotificationList} from "./NotificationList"


export default {
    title: "entities/Notifications/List",
    component: NotificationList,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [ StoreDecorator({}) ]
