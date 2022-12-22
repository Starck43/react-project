import React, {memo} from "react"
import {useTranslation} from "react-i18next"

import {getRouteProfile} from "@/shared/const/router"
import {classnames} from "@/shared/lib/helpers/classnames"
import {Card} from "@/shared/ui/card"
import {Avatar} from "@/shared/ui/avatar"
import {Header} from "@/shared/ui/header"
import {NavLink} from "@/shared/ui/link"

import type {Comment} from "../../model/types/comment"

import cls from "./CommentCard.module.sass"


interface CommentCardProps {
    data: Comment
}

export const CommentCard = memo(({data}: CommentCardProps) => {
    const {t} = useTranslation("comments")

    return (
        <Card
            data-testid="comment-card"
            direction="row"
            gap="sm"
            rounded
            bordered
            className={classnames(cls, [ "comment" ], {}, [ "my-1" ])}
        >
            <Avatar size={50} src={data.user?.avatar} rounded bordered />
            <Header
                tag="h4"
                title={(
                    <NavLink
                        to={getRouteProfile(data.user.id)}
                        title={data.user.username}
                        alt={`${t("автор комментария")} ${data.user.username}`}
                    />
                )}
                subTitle={<i>{data.text}</i>}
                align="start"
                fullWidth
                className={cls.comment__header}
            />
        </Card>
    )
})
