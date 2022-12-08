import {StateSchema} from "@/app/providers/store-provider"


export const getCommentsLoading = (state: StateSchema) => state.comments?.isLoading || false
export const getCommentsError = (state: StateSchema) => state.comments?.error
// export const getCommentsValidateErrors = (state: StateSchema) => state.comment?.validateErrors || undefined
