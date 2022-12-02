import {StateSchema} from "app/providers/store-provider"


export const getProfileData = (state: StateSchema) => state.profile?.data
export const getProfileCopy = (state: StateSchema) => state.profile?.copy
export const getProfileLoading = (state: StateSchema) => state.profile?.isLoading || false
export const getProfileError = (state: StateSchema) => state.profile?.error
export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors
