import React, {memo} from "react"
import {useTranslation} from "react-i18next"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {classnames} from "shared/lib/helpers/classnames"
import {Info, InfoStatus} from "shared/ui/info/Info"

import {Comment} from "../../model/types/comments"
import {commentsReducer} from "../../model/slice/commentsSlice"
import {CommentDetails} from "../comment-details/CommentDetails"
import {CommentSkeleton} from "../comment-skeleton/CommentSkeleton"

import cls from "./CommentList.module.sass"


interface CommentListProps {
    comments?: Comment[]
    isLoading?: boolean
    error?: string
    className?: string
}

const initialReducer: ReducerList = {comments: commentsReducer}

export const CommentList = memo((props: CommentListProps) => {
    const {comments, isLoading, error, className} = props
    const {t} = useTranslation("comments")

    if (error) {
        return (
            <Info
                title={t("произошла ошибка")}
                subtitle={t("комментарии не найдены!")}
                status={InfoStatus.ERROR}
                align="center"
            />
        )
    }

    if (isLoading) return <CommentSkeleton rounded inlined />


    return (
        <DynamicModuleLoader reducers={initialReducer}>
            <section className={classnames(cls, [ "comments__list" ], {}, [ className ])}>
                <div className={cls.comment__list}>
                    {comments?.length
                        ? comments.map((comment) => <CommentDetails data={comment} key={comment.id} />)
                        : <Info subtitle={t("комментарии отсутствуют!")} align="center" />}
                </div>
            </section>
        </DynamicModuleLoader>
    )
})
