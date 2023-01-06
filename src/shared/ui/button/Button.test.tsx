import { render, screen } from "@testing-library/react"

import { ButtonFeature } from "./consts"
import { Button } from "./Button"

describe("Button Tests", () => {
    test("test button in DOM", () => {
        render(<Button>Test</Button>)
        expect(screen.getByText("Test")).toBeInTheDocument()
    })

    test("test theme class", () => {
        render(<Button feature={ButtonFeature.BLANK}>Test</Button>)
        expect(screen.getByText("Test")).toHaveClass("blank")
        screen.debug()
    })
})
