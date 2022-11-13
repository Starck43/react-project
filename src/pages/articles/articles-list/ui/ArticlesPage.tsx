import {Article, ArticleList} from "entities/article"
import {ArticleBlockType, ArticleType} from "entities/article/model/types/article"
import {memo} from "react"
import {useTranslation} from "react-i18next"

import Header, {HeaderAlign} from "shared/ui/header/Header"


const article: Article = {
    id: "1",
    title: "Javascript news (the language for frontend)",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://yt3.ggpht.com/a/AATXAJzUcdlRmAqAK9eBY103rNs4cMYtzcD27XRHuA=s900-c-k-c0xffffffff-no-rj-mo",
    views: 1022,
    createdAt: "26.02.2022",
    type: [
        ArticleType.IT,
        ArticleType.FINANCE,
        ArticleType.PRESS,
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
        {
            id: "4",
            type: ArticleBlockType.CODE,
            code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;",
        },
        {
            id: "2",
            type: ArticleBlockType.IMAGE,
            src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
            title: "Рисунок 1 - скриншот сайта",
        },
    ],
    user: {
        id: "1",
        username: "admin",
        avatar: "https://rognowsky.ru/wp-content/uploads/2019/09/u55628068.jpg",
    },
}


function ArticlesPage() {
    const {t} = useTranslation("articles")

    return (
        <div className="container">
            <Header title={t("articles")} shadowed align={HeaderAlign.CENTER} />
            <ArticleList
                articles={new Array(16).fill(0).map((item, i) => ({...article, id: String(i)}))}
                isLoading={false}
            />
        </div>
    )
}

export default memo(ArticlesPage)
