export type {ArticleComment, ArticleCommentsSchema} from "./model/types/comments"

export {getCommentsLoading, getCommentsError} from "./model/selectors/getComments"
export {getCommentsData, commentsReducer} from "./model/slice/commentsSlice"
export {fetchCommentsData} from "./model/services/fetchCommentsData"
// export {validateCommentsData} from "./model/services/validateCommentsData"

export {ValidateCommentError} from "./model/types/comments"

export {CommentCard} from "./ui/comment-card/CommentCard"
export {CommentList} from "./ui/comment-list/CommentList"
