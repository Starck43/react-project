import { StateSchema } from "@/app/providers/store-provider"

export const getLoginUsername = (state: StateSchema) =>
    state?.login?.username || ""
