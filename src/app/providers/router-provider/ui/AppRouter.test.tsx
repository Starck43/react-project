import { screen } from "@testing-library/react"
import { UserRole } from "@/entities/user"
import {
    getRouteArticleCreate,
    getRouteArticleEdit,
    getRouteHome,
    getRouteProfile,
} from "@/shared/const/router"
import { componentRender } from "@/shared/lib/tests/componentRender"

import { AppRouter } from "./AppRouter"

describe("Router tests", () => {
    test("Render of exist page", async () => {
        componentRender(<AppRouter />, {
            route: getRouteHome(),
        })
        const page = await screen.findByTestId("HomePage")
        expect(page).toBeInTheDocument()
    })

    test("Redirect to not found page", async () => {
        componentRender(<AppRouter />, {
            route: "/contacts",
        })
        const page = await screen.findByTestId("NotFoundPage")
        expect(page).toBeInTheDocument()
    })

    test("Redirect to NotFound Page", async () => {
        componentRender(<AppRouter />, {
            route: "/contacts",
        })
        const page = await screen.findByTestId("NotFoundPage")
        expect(page).toBeInTheDocument()
    })

    test("Redirect to Auth Page", async () => {
        componentRender(<AppRouter />, {
            route: "/articles",
        })
        const page = await screen.findByTestId("AuthPage")
        expect(page).toBeInTheDocument()
    })

    test("Access to denied page for authorized user", async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile("1"),
            initialState: {
                user: { _mounted: true, authData: {} },
            },
        })
        const page = await screen.findByTestId("AuthPage")
        expect(page).toBeInTheDocument()
    })

    test("Access denied for user (no roles)", async () => {
        componentRender(<AppRouter />, {
            route: getRouteArticleCreate(),
            initialState: {
                user: { _mounted: true, authData: { id: "2" } },
            },
        })
        const page = await screen.findByTestId("ForbiddenPage")
        expect(page).toBeInTheDocument()
    })

    test("Access is allowed for user (with roles)", async () => {
        componentRender(<AppRouter />, {
            route: getRouteArticleEdit("1"),
            initialState: {
                user: {
                    _mounted: true,
                    authData: { id: "2", roles: [UserRole.EDITOR] },
                },
            },
        })
        const page = await screen.findByTestId("ArticleEditPage")
        expect(page).toBeInTheDocument()
    })
})
