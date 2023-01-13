import { StateSchema } from "@/app/providers/store-provider"

export const getProfileData = (state: StateSchema) => state.profile?.data
export const getProfileForm = (state: StateSchema) => state.profile?.form
export const getProfileLoading = (state: StateSchema) => state.profile?.isLoading || false
export const getProfileError = (state: StateSchema) => state.profile?.error
export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors
