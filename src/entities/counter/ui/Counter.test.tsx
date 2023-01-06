import { userEvent } from "@storybook/testing-library"
import { screen } from "@testing-library/react"

import { componentRender } from "@/shared/lib/tests/componentRender"

import { Counter } from "./Counter"

describe("Counter test", () => {
    test("", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 100 } },
        })
        const value = screen.getByTestId("counter-value")
        const buttonInc = screen.getByTestId("counterIncrement")
        userEvent.click(buttonInc)
        expect(value).toHaveTextContent("10")
    })

    test("Increment test", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 100 } },
        })
        const value = screen.getByTestId("counter-value")
        const buttonInc = screen.getByTestId("counterIncrement")
        userEvent.click(buttonInc)
        expect(value).toHaveTextContent("101")
    })

    test("Decrement Test", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 100 } },
        })
        const value = screen.getByTestId("counter-value")
        const buttonDec = screen.getByTestId("counterDecrement")
        userEvent.click(buttonDec)
        expect(value).toHaveTextContent("99")
    })
})
