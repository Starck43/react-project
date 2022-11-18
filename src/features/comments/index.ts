export type {NewCommentSchema} from "./new-comment/model/types/newComment"
export {newCommentReducer, newCommentActions} from "./new-comment/model/slice/newCommentSlice"
export {getNewCommentText, getNewCommentError} from "./new-comment/model/selectors/getNewComment"
// export {validateNewCommentData} from "./model/services/validateNewCommentData"

export {NewCommentFormAsync as NewCommentForm} from "./new-comment/ui/NewCommentForm.async"
