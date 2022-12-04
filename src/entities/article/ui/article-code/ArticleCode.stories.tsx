import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {ArticleBlockType} from "../../model/consts"

import {ArticleCode} from "./ArticleCode"


export default {
    title: "entities/Article/Code",
    component: ArticleCode,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ArticleCode>

const Template: ComponentStory<typeof ArticleCode> = (args) => <ArticleCode {...args} />

export const Default = Template.bind({})
Default.args = {
    block: {
        id: "1",
        type: ArticleBlockType.CODE,
        code: "<!DOCTYPE html>\n"
            + "<html lang=\"ru\">\n"
            + "\t<head>\n"
            + "\t\t<meta charset=\"UTF-8\">\n"
            + "\t\t<title>React Development Project</title>\n"
            + "\t</head>\n"
            + "\t<body>\n"
            + "\t\t<div id=\"root\"></div>\n"
            + "\t</body>\n"
            + "</html>\n",
    },
}
