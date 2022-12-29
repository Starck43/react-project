import {ComponentMeta, ComponentStory} from "@storybook/react"
import type {Article} from "@/entities/article"
import {ArticleType} from "@/entities/article"
import {buildAbsoluteUrl} from "@/shared/lib/helpers/urls"

import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"

import {ArticleRelatedList} from "./ArticleRelatedList"


export default {
    title: "features/Article/RelatedCard",
    component: ArticleRelatedList,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ArticleRelatedList>

const article: Article = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 109,
    createdAt: "26.02.2022",
    type: [ ArticleType.IT, ArticleType.BUSINESS ],
    blocks: [],
    user: {id: "1", username: "admin"},
}

const Template: ComponentStory<typeof ArticleRelatedList> = (args) => <ArticleRelatedList {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [ StoreDecorator({}) ]
Default.parameters = {
    mockData: [
        {
            url: buildAbsoluteUrl(__API__, "articles", {_limit: "4"}),
            method: "GET",
            status: 200,
            response: [
                {...article, id: "1"},
                {...article, id: "2"},
                {...article, id: "3"},
                {...article, id: "4"},
            ],
        },
    ],
}
