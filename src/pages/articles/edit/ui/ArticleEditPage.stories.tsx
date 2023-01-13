import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Article } from "@/entities/article"

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator"

import ArticleEditPage from "./ArticleEditPage"

export default {
    title: "pages/Articles/EditPage",
    component: ArticleEditPage,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = () => <ArticleEditPage />

const article: Article = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 109,
    createdAt: "26.02.2022",
    type: [],
    blocks: [],
    user: { id: "1", username: "admin" },
}

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
    StoreDecorator({
        article: {
            data: article,
            form: article,
        },
    }),
]
