import React, {memo} from "react"
import {useTranslation} from "react-i18next"
import {AppRoutes, RoutesPath} from "@/app/providers/router-provider/consts"
import {classnames} from "@/shared/lib/helpers/classnames"
import {Card} from "@/shared/ui/card/Card"

import {Avatar} from "@/shared/ui/avatar/Avatar"
import Header from "@/shared/ui/header/Header"
import {NavLink} from "@/shared/ui/link/NavLink"

import {Comment} from "../../model/types/comment"

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
            rounded
            bordered
            className={classnames(cls, [ "comment" ], {}, [ "my-1" ])}
        >
            <Avatar size={50} src={data.user?.avatar} rounded bordered />
            <Header
                tag="h5"
                title={(
                    <NavLink
                        to={RoutesPath[AppRoutes.PROFILE] + data.user.id}
                        title={data.user.username}
                        alt={`${t("автор комментария")} ${data.user.username}`}
                    />
                )}
                subTitle={data.text}
                align="start"
                fullWidth
                className={cls.comment__header}
            />
        </Card>
    )
})
