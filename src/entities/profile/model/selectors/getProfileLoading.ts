import {StateSchema} from "app/providers/store-provider"

export const getProfileLoading = (state: StateSchema) => state.profile?.isLoading || false
