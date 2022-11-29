import {action} from "@storybook/addon-actions"
import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator"

import NewCommentForm from "./NewCommentForm"


export default {
    title: "features/Comments/NewCommentForm",
    component: NewCommentForm,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof NewCommentForm>

const Template: ComponentStory<typeof NewCommentForm> = (args) => <NewCommentForm {...args} />

export const Default = Template.bind({})
Default.args = {
    onSaveComment: action("onSaveComment"),
}
Default.decorators = [
    StoreDecorator({}),
]
