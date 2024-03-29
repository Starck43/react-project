import { useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import DynamicModuleLoader, { ReducerList } from "@/shared/lib/components/DynamicModuleLoader"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { classnames } from "@/shared/lib/helpers/classnames"
import { Button, ButtonFeature } from "@/shared/ui/button"
import { Info, InfoStatus } from "@/shared/ui/info"
import { TextArea } from "@/shared/ui/input"

import { getNewCommentError, getNewCommentText } from "../../model/selectors/getNewComment"
import { newCommentActions, newCommentReducer } from "../../model/slice/newCommentSlice"

import cls from "./NewCommentForm.module.sass"

interface NewCommentFormProps {
    onSaveComment: (text: string) => void
    className?: string
}

const initialReducer: ReducerList = { newComment: newCommentReducer }

const NewCommentForm = ({ onSaveComment, className }: NewCommentFormProps) => {
    const { t } = useTranslation("comments")
    const dispatch = useAppDispatch()

    const text = useSelector(getNewCommentText)
    const error = useSelector(getNewCommentError)

    const onTextChange = useCallback(
        (val: string) => {
            dispatch(newCommentActions.update(val))
        },
        [dispatch],
    )

    const onSaveHandler = useCallback(() => {
        onSaveComment(text || "")
        onTextChange("")
    }, [onSaveComment, onTextChange, text])

    if (error) {
        return (
            <Info
                title={t("произошла ошибка")}
                subTitle={t("попробуйте перезагрузить страницу")}
                status={InfoStatus.ERROR}
            />
        )
    }

    return (
        <DynamicModuleLoader reducers={initialReducer}>
            <form data-testid="NewCommentForm" className={classnames(cls, ["new_comment"], {}, [className])}>
                <TextArea value={text} onChange={onTextChange} placeholder={t("введите текст комментария")!} />
                <Button feature={ButtonFeature.BLANK} bordered disabled={!text} onClick={onSaveHandler}>
                    {t("отправить")}
                </Button>
            </form>
        </DynamicModuleLoader>
    )
}

export default NewCommentForm
