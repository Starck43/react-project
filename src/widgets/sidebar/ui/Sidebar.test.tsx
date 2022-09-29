import {fireEvent, screen} from "@testing-library/react"
import {withTranslation} from "react-i18next"
import {RenderWithTranslation} from "shared/lib/tests/render-with-translation/RenderWithTranslation"

import {Sidebar} from "./Sidebar"


describe("Sidebar Tests", () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)
    test("Sidebar in DOM", () => {
        RenderWithTranslation(<SidebarWithTranslation />)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    })

    test("Sidebar is collapsed", () => {
        RenderWithTranslation(<SidebarWithTranslation />)
        const toggleBtn = screen.getByTestId("sidebar-toggle")
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    })
})
