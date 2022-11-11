import {Comment, ValidateCommentError} from "../../../../entities/comment/model/types/comments"


export const validateCommentsData = (comment?: DeepPartial<Comment>) => {
    if (!comment) return [ ValidateCommentError.NO_DATA ]

    const {text} = comment
    const errors: ValidateCommentError[] = []

    if (!text) {
        errors.push(ValidateCommentError.NO_COMMENT)
    }

    return errors
}
