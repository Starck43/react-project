import { StateSchema } from "@/app/providers/store-provider"

export const getLoginLoading = (state: StateSchema) =>
    state?.login?.isLoading || false
