import {classnames} from "./classnames"

describe("classnames", () => {
    test("with arr param", () => {
        expect(classnames(null, ["test"], {}, [])).toBe("")
    })
    test("with dict param", () => {
        expect(classnames(null, [], {test: true}, [])).toBe("")
    })
    test("with additional param", () => {
        expect(classnames(null, [], {}, ["test"])).toBe("test")
    })
})
