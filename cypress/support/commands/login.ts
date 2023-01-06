import { AUTH_USER_KEY } from "@/shared/const/localStorage"

export const login = (username: string = "guest", password: string = "guest") =>
    cy
        .request({
            method: "POST",
            url: `${Cypress.env("api_server")}/login`,
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(AUTH_USER_KEY, JSON.stringify(body))
            return body
        })
