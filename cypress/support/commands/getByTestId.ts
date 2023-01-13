import { selectByTestId } from "../../helpers/selectByTestId"

export const getByTestId = (testId = "", selector = "") => cy.get(`${selectByTestId(testId)} ${selector}`)
