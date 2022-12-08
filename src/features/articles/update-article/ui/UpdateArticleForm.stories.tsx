import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"

import {UpdateArticleForm} from "./UpdateArticleForm"


export default {
    title: "features/UpdateArticleForm",
    component: UpdateArticleForm,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof UpdateArticleForm>

const Template: ComponentStory<typeof UpdateArticleForm> = (args) => <UpdateArticleForm {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [ StoreDecorator({}) ]
