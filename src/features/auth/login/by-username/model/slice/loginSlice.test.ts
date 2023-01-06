import { LoginSchema } from "../types/loginSchema"
import { loginActions, loginReducer } from "../slice/loginSlice"

describe("loginSlice test", () => {
    test("set username", () => {
        const state: DeepPartial<LoginSchema> = { username: "" }
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername("admin"),
            ),
        ).toStrictEqual({ username: "admin" })
    })

    test("set password", () => {
        const state: DeepPartial<LoginSchema> = { password: "" }
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword("admin"),
            ),
        ).toStrictEqual({ password: "admin" })
    })
})
