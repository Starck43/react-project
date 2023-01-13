import { StateSchema } from "@/app/providers/store-provider"
import { UserRole } from "@/entities/user"
import { getCanEditArticleData } from "../../model/selectors/getEditArticleData"

describe("getCanEditArticleData test", () => {
    test("User can edit", () => {
        const state: DeepPartial<StateSchema> = {
            article: {
                data: { id: "1" },
            },
            user: {
                authData: {
                    roles: [UserRole.ADMIN],
                },
            },
        }

        expect(getCanEditArticleData(state as StateSchema)).toBeTruthy()
    })
})
