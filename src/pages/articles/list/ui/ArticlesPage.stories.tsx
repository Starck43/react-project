import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"
import {Article, ArticleBlockType, ArticleType, ArticleView} from "@/entities/article"
import Image from "@/shared/assets/icons/avatar-profile.jpeg"


import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator"

import ArticlesPage from "./ArticlesPage"


export default {
    title: "pages/Articles/ListPage",
    component: ArticlesPage,
    argTypes: {backgroundColor: {control: "color"}},
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />

const article: Article = {
    id: "1",
    title: "Javascript news (the language for frontend)",
    subtitle: "Что нового в JS за 2022 год?",
    img: Image,
    views: 1022,
    createdAt: "26.02.2022",
    type: [
        ArticleType.IT,
        ArticleType.FINANCE,
        ArticleType.MEDIA,
    ],
    blocks: [
        {
            id: "1",
            type: ArticleBlockType.TEXT,
            title: "Заголовок этого блока",
            paragraphs: [
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
            ],
        },
    ],
    user: {
        id: "1",
        username: "admin",
        avatar: Image,
    },
}

export const Default = Template.bind({})
Default.args = {}
Default.decorators = [
    StoreDecorator({
        user: {authData: {id: "1"}},
        articles: {
            _mounted: true,
            ids: [ 0, 1, 2, 3 ],
            entities: {
                0: {...article, id: "1"},
                1: {...article, id: "2"},
                2: {...article, id: "3"},
                3: {...article, id: "4"},
            },
            view: ArticleView.LIST,
        },
    }),
]
