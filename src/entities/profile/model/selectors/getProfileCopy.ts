import {StateSchema} from "app/providers/store-provider"

export const getProfileCopy = (state: StateSchema) => state.profile?.copy
