import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {CommentList} from "./CommentList"


export default {
    title: "entities/Comments/List",
    component: CommentList,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Default = Template.bind({})
Default.args = {}
