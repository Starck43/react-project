import {DeepPartial} from "@reduxjs/toolkit"
import {StateSchema} from "app/providers/store-provider"
import {getLoginUsername} from "features/auth/by-username/model/selectors/getLoginUsername"


describe("getLoginUsername test", () => {
	test("Return username", () => {
		const state: DeepPartial<StateSchema> = {login: {username: "admin"}}
        expect(getLoginUsername(state as StateSchema)).toEqual("admin")
	})

	test("Return empty username", () => {
		const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual("")
	})
})
