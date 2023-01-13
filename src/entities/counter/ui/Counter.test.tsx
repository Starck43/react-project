import { userEvent } from "@storybook/testing-library"
import { screen } from "@testing-library/react"

import { componentRender } from "@/shared/lib/tests/componentRender"

import { Counter } from "./Counter"

describe("Counter test", () => {
    test("Increment by clicking on value", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 1 },
            },
        })
        const value = screen.getByTestId("Counter.Value")
        userEvent.click(value)
        expect(value).toHaveTextContent("11")
    })

    test("Increment", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 100 },
            },
        })
        const value = screen.getByTestId("Counter.Value")
        const buttonInc = screen.getByTestId("Counter.Increment")
        userEvent.click(buttonInc)
        expect(value).toHaveTextContent("101")
    })

    test("Decrement", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 100 },
            },
        })
        const value = screen.getByTestId("Counter.Value")
        const buttonDec = screen.getByTestId("Counter.Decrement")
        userEvent.click(buttonDec)
        expect(value).toHaveTextContent("99")
    })
})
