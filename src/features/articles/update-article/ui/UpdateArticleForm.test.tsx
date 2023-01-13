import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Article, ArticleType, articleReducer } from "@/entities/article"

import { UserRole } from "@/entities/user"
import { componentRender, RenderWithRouterProps } from "@/shared/lib/tests/componentRender"

import { $api } from "@/shared/api/api"
import { EditArticleControl } from "../../edit-article-control/ui/EditArticleControl"
import { UpdateArticleForm } from "./UpdateArticleForm"

const article: Article = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    type: [ArticleType.IT],
    blocks: [],
}

const options: RenderWithRouterProps = {
    initialState: {
        article: {
            data: article,
            form: article,
            isLoading: false,
            error: "",
        },
        user: {
            authData: {
                roles: [UserRole.ADMIN],
            },
        },
    },
    asyncReducers: { article: articleReducer },
}

// TODO: complete test for UpdateArticleForm
describe("UpdateArticleForm Tests", () => {
    test("User has access to modify article", async () => {
        componentRender(<EditArticleControl articleId="1" />, options)
        expect(screen.queryByTestId("EditArticleControl.EditButton")).toBeInTheDocument()

        await userEvent.click(screen.getByTestId("EditArticleControl.EditButton"))
        componentRender(<UpdateArticleForm articleId="1" />, options)
        expect(screen.getByTestId("UpdateArticleForm")).toBeInTheDocument()
    })
    test("User hasn't access to modify article", () => {
        componentRender(<EditArticleControl articleId="1" />, {
            ...options,
            initialState: {
                user: {
                    authData: {
                        roles: [UserRole.GUEST],
                    },
                },
            },
        })
        expect(screen.queryByTestId("EditArticleControl.EditButton")).not.toBeInTheDocument()
    })
    test("Save changes", async () => {
        const mockedPut = jest.spyOn($api, "put")
        componentRender(<UpdateArticleForm articleId="1" />, options)
        await userEvent.clear(screen.getByTestId("UpdateArticleForm.Title"))
        await userEvent.type(screen.getByTestId("UpdateArticleForm.Title"), "Test title")
        await userEvent.click(screen.getByTestId("UpdateArticleForm.SaveButton"))

        expect(mockedPut).toHaveBeenCalled()
    })
    test("Cancel changes", async () => {
        const mockedPut = jest.spyOn($api, "put")
        componentRender(<UpdateArticleForm articleId="1" />, options)
        await userEvent.clear(screen.getByTestId("UpdateArticleForm.Title"))
        await userEvent.type(screen.getByTestId("UpdateArticleForm.Title"), "Test title")
        await userEvent.click(screen.getByTestId("UpdateArticleForm.CancelButton"))

        expect(mockedPut).not.toHaveBeenCalled()
    })
})
