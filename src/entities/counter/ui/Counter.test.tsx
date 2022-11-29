import {userEvent} from "@storybook/testing-library"
import {screen} from "@testing-library/react"

import {ComponentRender} from "shared/lib/tests/component-render/ComponentRender"

import {Counter} from "./Counter"


describe("Counter test", () => {
	test("", () => {
		ComponentRender(<Counter />, {initialState: {counter: {value: 100}}})
		const value = screen.getByTestId("counter-value")
		const buttonInc = screen.getByTestId("counterIncrement")
		userEvent.click(buttonInc)
		expect(value).toHaveTextContent("10")
	})

	test("Increment test", () => {
		ComponentRender(<Counter />, {initialState: {counter: {value: 100}}})
		const value = screen.getByTestId("counter-value")
		const buttonInc = screen.getByTestId("counterIncrement")
		userEvent.click(buttonInc)
		expect(value).toHaveTextContent("101")
	})

	test("Decrement Test", () => {
		ComponentRender(<Counter />, {initialState: {counter: {value: 100}}})
		const value = screen.getByTestId("counter-value")
		const buttonDec = screen.getByTestId("counterDecrement")
		userEvent.click(buttonDec)
		expect(value).toHaveTextContent("99")
	})
})
