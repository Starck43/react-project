export type {NewCommentSchema} from "./model/types/newComment"
export {newCommentReducer, newCommentActions} from "./model/slice/newCommentSlice"
export {getNewCommentText, getNewCommentError} from "./model/selectors/getNewComment"
// export {validateNewCommentData} from "./model/services/validateNewCommentData"

export {NewCommentFormAsync as NewCommentForm} from "./ui/NewCommentForm.async"
