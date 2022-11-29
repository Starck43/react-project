import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {ArticleBlockType} from "../../model/types/article"

import {ArticleText} from "./ArticleText"


export default {
    title: "entities/Article/Text",
    component: ArticleText,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ArticleText>

const Template: ComponentStory<typeof ArticleText> = (args) => <ArticleText {...args} />

export const Default = Template.bind({})
Default.args = {
    block: {
        id: "1",
        type: ArticleBlockType.TEXT,
        title: "Заголовок параграфа",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ipsum iure magni perferendis, rem vitae.",
        ],
    },
}
