import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator"

import {CommentDetails} from "./CommentDetails"


export default {
    title: "entities/Comments/CommentDetails",
    component: CommentDetails,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof CommentDetails>

const Template: ComponentStory<typeof CommentDetails> = (args) => <CommentDetails {...args} />

export const Default = Template.bind({})
Default.args = {
    data: {
        id: "1",
        user: {
            id: "1",
            username: "admin",
        },
        text: "Some comment",
    },
}
Default.decorators = [
    StoreDecorator({}),
]
