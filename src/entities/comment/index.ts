export type { Comment, CommentSchema } from "./model/types/comment"
export type { NewCommentSchema } from "./model/types/newComment"
export { ValidateCommentError } from "./model/consts"

export {
    getCommentsLoading,
    getCommentsError,
} from "./model/selectors/getComments"
export { CommentSkeleton } from "./ui/comment-skeleton/CommentSkeleton"

export {
    newCommentReducer,
    newCommentActions,
} from "./model/slice/newCommentSlice"
export {
    getNewCommentText,
    getNewCommentError,
} from "./model/selectors/getNewComment"
// export {validateNewCommentData} from "./model/services/validateNewCommentData"

export { CommentCard } from "./ui/comment-card/CommentCard"
export { NewCommentFormAsync as NewCommentForm } from "./ui/comment-form/NewCommentForm.async"
export { CommentList } from "./ui/comment-list/CommentList"
