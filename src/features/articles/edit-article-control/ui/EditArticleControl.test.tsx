import { screen } from "@testing-library/react"

import { userReducer, UserRole } from "@/entities/user"
import { componentRender, RenderWithRouterProps } from "@/shared/lib/tests/componentRender"

import type { Article } from "../../../../entities/article/model/types/article"
import { articleReducer } from "../../../../entities/article/model/slice/article-details/articleSlice"
import { EditArticleControl } from "./EditArticleControl"

const article: Article = {
    id: "1",
}

const options: RenderWithRouterProps = {
    initialState: {
        article: {
            data: article,
        },
        user: {
            authData: {
                id: article.id,
                roles: [UserRole.ADMIN],
            },
        },
    },
    asyncReducers: {
        article: articleReducer,
        user: userReducer,
    },
}

describe("EditArticleControl test", () => {
    // common logic, running before every test, may be here
    beforeEach(() => {
        componentRender(<EditArticleControl articleId={article.id} />, options)
    })

    test("User has a necessary role to change article", async () => {
        expect(screen.getByTestId("EditArticleControl.EditButton")).toBeInTheDocument()
    })
})
