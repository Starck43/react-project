import {ComponentMeta, ComponentStory} from "@storybook/react"

import type {Article} from "@/entities/article"
import {ArticleType} from "@/entities/article"

import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"
import {buildAbsoluteUrl} from "@/shared/lib/helpers/urls"

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
    img: "https://avatars.mds.yandex.net/i?id=3b03320a4ed6ed61c7dde37c8c303119dabf3a14-4345998-images-thumbs&n=13",
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
            url: buildAbsoluteUrl(__API__, "articles", {_limit: 4}),
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
