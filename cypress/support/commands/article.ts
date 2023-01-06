import { Article } from "@/entities/article"

const defaultArticle = {
    id: "1000",
    title: "Kotlin news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://avatars.mds.yandex.net/i?id=4b5ddde86668aa74db1b0a534f9e2511_sr-4825382-images-thumbs&n=13",
    views: 1022,
    createdAt: "26.02.2022",
    userId: "1",
    type: ["IT"],
    blocks: [],
}

export const createArticle = (article?: Article) =>
    cy
        .request({
            method: "POST",
            url: `${Cypress.env("api_server")}/articles`,
            headers: { Authorization: "some header" },
            body: article ?? defaultArticle,
        })
        .then((res) => res.body)

export const removeArticle = (id: string) =>
    cy.request({
        method: "DELETE",
        url: `${Cypress.env("api_server")}/articles/${id}`,
        headers: { Authorization: "some header" },
    })
