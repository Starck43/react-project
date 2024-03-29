import { ComponentMeta, ComponentStory } from "@storybook/react"

import type { Article } from "../../model/types/article"
import { ArticleBlockType, ArticleType, ArticleView } from "../../model/consts"

import { ArticleListItem } from "./ArticleListItem"

export default {
    title: "entities/Article/ListItem",
    component: ArticleListItem,
    argTypes: { backgroundColor: { control: "color" } },
} as ComponentMeta<typeof ArticleListItem>

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />

const article: Article = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://avatars.mds.yandex.net/i?id=3b03320a4ed6ed61c7dde37c8c303119dabf3a14-4345998-images-thumbs&n=13",
    views: 1022,
    createdAt: "26.02.2022",
    type: [ArticleType.IT],
    user: {
        id: "1",
        username: "admin",
    },
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
}
export const List = Template.bind({})
List.args = {
    view: ArticleView.LIST,
    article,
}

export const Tile = Template.bind({})
Tile.args = {
    view: ArticleView.TILE,
    article,
}
