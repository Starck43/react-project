import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator"

import { CommentCard } from "./CommentCard"

export default {
    title: "entities/Comments/CommentDetails",
    component: CommentCard,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

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
Default.decorators = [StoreDecorator({})]
