import {ArticleComment, ValidateCommentError} from "../types/comments"


export const validateCommentsData = (comment?: DeepPartial<ArticleComment>) => {
    if (!comment) return [ ValidateCommentError.NO_DATA ]

    const {text} = comment
    const errors: ValidateCommentError[] = []

    if (!text) {
        errors.push(ValidateCommentError.NO_COMMENT)
    }

    return errors
}
