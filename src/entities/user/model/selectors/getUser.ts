import { StateSchema } from "@/app/providers/store-provider"

export const getUser = (state: StateSchema) => state.user.authData || {}
export const getUserOnMount = (state: StateSchema) => state.user._mounted
