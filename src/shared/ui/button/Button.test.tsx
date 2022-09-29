import {render, screen} from "@testing-library/react"
import {Button, ThemeButton} from "./Button"


describe("Button Tests", () => {
    test("test button in DOM", () => {
        render(<Button>Test</Button>)
        expect(screen.getByText("Test")).toBeInTheDocument()
    })

    test("test theme class", () => {
        render(<Button theme={ThemeButton.BLANK}>Test</Button>)
        expect(screen.getByText("Test")).toHaveClass("blank")
        screen.debug()
    })
})
