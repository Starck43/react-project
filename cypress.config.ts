import { defineConfig } from "cypress"

require("dotenv").config()

export default defineConfig({
    e2e: {
        // implement node event listeners here
        setupNodeEvents(on, config) {},
        baseUrl: "http://localhost:3000",
    },

    env: {
        api_server: process.env.API_SERVER,
        username: "admin",
        password: "admin",
    },

    component: {
        devServer: {
            framework: "react",
            bundler: "webpack",
        },
    },
})
