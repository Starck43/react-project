import {fireEvent, screen} from "@testing-library/react"
import {withTranslation} from "react-i18next"
import {ComponentRender} from "shared/lib/tests/component-render/ComponentRender"
import {Navbar} from "widgets/navbar"


describe("Modal Tests", () => {
    const NavbarWithTranslation = withTranslation()(Navbar)

    test("Modal in document", () => {
        ComponentRender(<NavbarWithTranslation />)
        expect(screen.getByTestId("modal"))
        .toBeInTheDocument()
        screen.debug()
    })

    test("Modal Close on Escape", () => {
        ComponentRender(<NavbarWithTranslation />)
        const authBtn = screen.getByTestId("authBtn")
        fireEvent.click(authBtn)
        fireEvent.keyPress(window, {key: "Escape", code: 27})
        expect(expect(screen.getByTestId("modal")).toHaveClass("open")).toBeUndefined()
        screen.debug()
    })
})
