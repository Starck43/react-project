import React from "react"
import {classnames} from "shared/lib/helpers/classnames"

import Header from "shared/ui/header/Header"

import {Notification} from "../../../notification"

import cls from "./NotificationItem.module.sass"


interface NotificationItemProps {
    item: Notification
}

export const NotificationItem = ({item}: NotificationItemProps) => (
    <Header
        title={item.title}
        subTitle={item.description}
        href={item.href}
        className={classnames(cls, [ "item", item.href ? "link" : "" ])}
    />
)
