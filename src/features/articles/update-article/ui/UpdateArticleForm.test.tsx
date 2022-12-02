import {fireEvent, screen} from "@testing-library/react"
import {componentRender} from "shared/lib/tests/componentRender"

import {UpdateArticleForm} from "./UpdateArticleForm"


describe("UpdateArticleForm Tests", () => {
    test("Can edit test", () => {
        componentRender(<UpdateArticleForm articleId="1" />, {
            initialState: {
                article: {
                    data: {},
                    isLoading: false,
                    error: "",
                },
            },
        })
        expect(screen.getByTestId("UpdateArticleForm.EditButton")).toBeInTheDocument()
    })
})
