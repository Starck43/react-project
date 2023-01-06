import { Profile } from "@/entities/profile"
import { User } from "@/entities/user"
import { Article } from "@/entities/article"

import { getByTestId } from "./commands/getByTestId"
import { login } from "./commands/login"
import { resetProfile, updateProfile } from "./commands/profile"
import { createArticle, removeArticle } from "./commands/article"
import { addComment } from "./commands/comments"
import {
    getArticleRating,
    removeArticleRating,
    setArticleRating,
} from "./commands/rating"

// Injection of the custom commands
Cypress.Commands.add("login", login)
Cypress.Commands.add("getByTestId", getByTestId)
Cypress.Commands.add("updateProfile", updateProfile)
Cypress.Commands.add("resetProfile", resetProfile)
Cypress.Commands.add("createArticle", createArticle)
Cypress.Commands.add("removeArticle", removeArticle)
Cypress.Commands.add("addComment", addComment)
Cypress.Commands.add("setArticleRating", setArticleRating)
Cypress.Commands.add("getArticleRating", getArticleRating)
Cypress.Commands.add("removeArticleRating", removeArticleRating)

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>
            getByTestId(
                testId: string,
                selector?: string,
            ): Chainable<JQuery<HTMLElement>>
            updateProfile(data: Profile): Chainable<void>
            resetProfile(id: string): void
            createArticle(article?: Article): Chainable<Article>
            removeArticle(id: string): Chainable<Response<any>>
            addComment(text: string): Chainable<void>
            setArticleRating(value: number, text?: string): Chainable<void>
            getArticleRating({
                userId,
                articleId,
            }: {
                userId: string
                articleId: string
            }): Chainable<any[]>
            removeArticleRating(id: string): Chainable<Response<any>>
        }
    }
}

export {}
