import React, {memo} from "react"
import {useTranslation} from "react-i18next"

import {AppRoutes, RoutesPath} from "shared/config/router"
import {Avatar} from "shared/ui/avatar/Avatar"
import Header, {TitleType} from "shared/ui/header/Header"
import {NavLink} from "shared/ui/link/NavLink"

import {Comment} from "../../model/types/comments"

import cls from "./CommentDetails.module.sass"


interface CommentCardProps {
    data: Comment
}

export const CommentDetails = memo(({data}: CommentCardProps) => {
    const {t} = useTranslation("comments")

    return (
        <div data-testid="comment-card" className={cls.comment}>
            <Avatar size={50} src={data.user?.avatar} rounded bordered />
            <Header
                title={(
                    <NavLink
                        title={`${t("автор комментария")} ${data.user.username}`}
                        to={RoutesPath[AppRoutes.PROFILE] + data.user.id}
                    >
                        <h5>{data.user.username}</h5>
                    </NavLink>
                )}
                subTitle={data.text}
                titleType={TitleType.H5}
                className={cls.comment__header}
            />
        </div>
    )
})
