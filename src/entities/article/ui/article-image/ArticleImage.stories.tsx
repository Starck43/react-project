import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"

import {ArticleBlockType} from "../../model/types/article"

import {ArticleImage} from "./ArticleImage"


export default {
    title: "entities/Article/Image",
    component: ArticleImage,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ArticleImage>

const Template: ComponentStory<typeof ArticleImage> = (args) => <ArticleImage {...args} />

export const Default = Template.bind({})
Default.args = {
    block: {
        id: "8",
        type: ArticleBlockType.IMAGE,
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Рисунок 1 - скриншот сайта",
    },
}
