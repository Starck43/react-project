import {Article, ArticleView} from "entities/article"
import React from "react"
import {ComponentMeta, Story} from "@storybook/react"
import {StoreDecorator} from "shared/config/storybook/StoreDecorator"

import ArticlesPage from "./ArticlesPage"


export default {
    title: "pages/Articles/ArticlesPage",
    component: ArticlesPage,
    argTypes: {backgroundColor: {control: "color"}},
    decorators: [ StoreDecorator({}) ],
} as ComponentMeta<typeof ArticlesPage>

const article: Article = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 109,
    createdAt: "26.02.2022",
    type: [],
    blocks: [],
    user: {id: "1", username: "admin"},
}

const Template: Story = (args) => <ArticlesPage {...args} />

export const Default = Template.bind({})
Default.args = {view: ArticleView.TILE}
Default.decorators = [
    StoreDecorator({
        articles: {
            _mounted: true,
            view: ArticleView.TILE,
        },
    }),
]
Default.parameters = {
    mockData: [
        {
            url: `${process.env.API_SERVER}/articles?_expand=user&_page=1&_limit=3&_sort=title&_order=asc&q=`,
            method: "GET",
            status: 200,
            response: [
                {...article, id: "1"},
                {...article, id: "2"},
                {...article, id: "3"},
            ],
        },
    ],
}
