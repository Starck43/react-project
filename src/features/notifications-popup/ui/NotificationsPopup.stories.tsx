import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {NotificationsPopup} from "./NotificationsPopup"


export default {
    title: "features/NotificationsPopup",
    component: NotificationsPopup,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof NotificationsPopup>

const Template: ComponentStory<typeof NotificationsPopup> = (args) => <NotificationsPopup {...args} />

export const Default = Template.bind({})
Default.args = {}
