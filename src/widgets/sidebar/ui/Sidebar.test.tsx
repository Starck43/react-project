import {fireEvent, screen} from "@testing-library/react"
import {withTranslation} from "react-i18next"
import {componentRender} from "shared/lib/tests/componentRender"

import Sidebar from "./Sidebar"


describe("Sidebar Tests", () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)
    test("Sidebar in DOM", () => {
        componentRender(<SidebarWithTranslation />)
        expect(screen.getByTestId("Sidebar"))
        .toBeInTheDocument()
    })

    test("Sidebar is collapsed", () => {
        componentRender(<SidebarWithTranslation />)
        const w = window.innerWidth
        if (w < 992) {
            const toggleBtn = screen.getByTestId("Sidebar.ToggleBtn")
            fireEvent.click(toggleBtn)
            expect(screen.getByTestId("Sidebar"))
            .toHaveClass("collapsed")
        }
        screen.debug()
    })
})
