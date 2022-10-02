import {fireEvent, screen} from "@testing-library/react"
import {withTranslation} from "react-i18next"
import {ComponentRender} from "shared/lib/tests/component-render/ComponentRender"

import {Sidebar} from "./Sidebar"


describe("Sidebar Tests", () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)
    test("Sidebar in DOM", () => {
        ComponentRender(<SidebarWithTranslation />)
        expect(screen.getByTestId("sidebar"))
        .toBeInTheDocument()
    })

    test("Sidebar is collapsed", () => {
        ComponentRender(<SidebarWithTranslation />)
        const w = window.innerWidth
        if (w < 992) {
            const toggleBtn = screen.getByTestId("sidebar-toggle")
            fireEvent.click(toggleBtn)
            expect(screen.getByTestId("sidebar"))
            .toHaveClass("collapsed")
        }
        screen.debug()
    })
})
