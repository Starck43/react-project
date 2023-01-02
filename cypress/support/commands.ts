import {login} from "./commands/login"

// Injection of the custom commands
Cypress.Commands.add("login", login)

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<void>
    }
  }
}

export {}
