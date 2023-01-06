import { StateSchema } from "@/app/providers/store-provider"

export const getNewCommentText = (state: StateSchema) =>
    state.newComment?.text ?? ""
export const getNewCommentError = (state: StateSchema) =>
    state.newComment?.error
