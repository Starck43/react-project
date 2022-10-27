import {StateSchema} from "app/providers/store-provider"
import {getLoginLoading} from "features/auth/login/by-username/model/selectors/getLoginLoading"


describe("getLoginLoading test", () => {
	test("Return is loading", () => {
		const state: DeepPartial<StateSchema> = {login: {isLoading: true}}
        expect(getLoginLoading(state as StateSchema)).toEqual(true)
	})

	test("Return not is loading", () => {
		const state: DeepPartial<StateSchema> = {}
        expect(getLoginLoading(state as StateSchema)).toEqual(false)
	})
})
