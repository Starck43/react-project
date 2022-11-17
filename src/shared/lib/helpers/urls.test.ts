import {getQueryParams} from "shared/lib/helpers/urls"


describe("query params test", () => {
	test("with one param", () => {
		const params = getQueryParams({test: "value"})
        expect(params).toBe("?test=value")
	})
	test("with multiple params", () => {
		const params = getQueryParams({
			sort: "name",
			order: "asc",
		})
		expect(params).toBe("?sort=name&order=asc")
	})
	test("with undefined", () => {
		const params = getQueryParams({
			sort: "name",
			order: undefined,
		})
		expect(params).toBe("?sort=name")
	})
})
