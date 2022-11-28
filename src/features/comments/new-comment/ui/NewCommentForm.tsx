import {useCallback} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {classnames} from "shared/lib/helpers/classnames"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Info, InfoStatus} from "shared/ui/info/Info"
import {TextArea} from "shared/ui/input/Input"

import {getNewCommentError, getNewCommentText} from "../model/selectors/getNewComment"
import {newCommentActions, newCommentReducer} from "../model/slice/newCommentSlice"

import cls from "./NewCommentForm.module.sass"


interface NewCommentFormProps {
    onSaveComment: (text: string) => void
    className?: string
}

const initialReducer: ReducerList = {newComment: newCommentReducer}

const NewCommentForm = ({onSaveComment, className}: NewCommentFormProps) => {
    const {t} = useTranslation("comments")
    const dispatch = useAppDispatch()

    const text = useSelector(getNewCommentText)
    const error = useSelector(getNewCommentError)

    const onTextChange = useCallback((val: string) => {
        dispatch(newCommentActions.update(val))
    }, [ dispatch ])


    const onSaveHandler = useCallback(() => {
        onSaveComment(text || "")
        onTextChange("")
    }, [ onSaveComment, onTextChange, text ])


    if (error) {
        return (
            <Info
                title={t("произошла ошибка")}
                subtitle={t("попробуйте перезагрузить страницу")}
                status={InfoStatus.ERROR}
                align="center"
            />
        )
    }

    return (
        <DynamicModuleLoader reducers={initialReducer}>
            <div data-testid="newComment" className={classnames(cls, [ "new_comment" ], {}, [ className ])}>
                <TextArea
                    value={text}
                    onChange={onTextChange}
                    placeholder={t("введите текст комментария")}
                />
                <Button
                    feature={ButtonFeature.BLANK}
                    bordered
                    disabled={!text}
                    onClick={onSaveHandler}
                >
                    {t("отправить")}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
}

export default NewCommentForm
