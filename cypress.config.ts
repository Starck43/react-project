import {defineConfig} from "cypress"

require("dotenv").config()


export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },
  env: {
    api_server: process.env.API_SERVER,
    username: "admin",
    password: "admin",
  },
})
