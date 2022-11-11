import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator"

import {CommentList} from "./CommentList"


export default {
    title: "entities/Comments/CommentList",
    component: CommentList,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Default = Template.bind({})
Default.args = {
    isLoading: false,
    comments: [
        {
            id: "1",
            text: "some comment",
            user: {
                id: "1",
                username: "admin",
            },
        },
        {
            id: "2",
            text: "some comment 2",
            user: {
                id: "1",
                username: "admin",
            },
        },
        {
            id: "3",
            text: "some comment 3",
            user: {
                id: "2",
                username: "guest",
            },
        },
    ],
}

Default.decorators = [
    StoreDecorator({}),
]
