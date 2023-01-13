import React from "react"
import { useTranslation } from "react-i18next"

import { classnames } from "@/shared/lib/helpers/classnames"
import { Button } from "@/shared/ui/button"
import { Info, InfoStatus } from "@/shared/ui/info"
import { Skeleton, SkeletonElementType } from "@/shared/ui/skeleton"
import { Col } from "@/shared/ui/stack"
import RefreshIcon from "@/shared/assets/icons/refresh.svg"

import { Notification } from "../../../notification"
import { useNotificationsQuery } from "../../api"
import { NotificationItem } from "../notification-item/NotificationItem"

import cls from "./NotificationList.module.sass"

interface NotificationListProps {
    className?: string
}

export const NotificationList = ({ className }: NotificationListProps) => {
    const { t } = useTranslation()
    const { data, isLoading, isError, refetch } = useNotificationsQuery(null, {
        refetchOnMountOrArgChange: true, // to skip cached result
        // pollingInterval: 5000, // refetch every 5sec
    })

    if (isLoading) {
        return (
            <Col data-testid="notification-list" gap="md" fullWidth className={classnames(cls, ["notification_list"])}>
                <Skeleton variant="primary" rounded elements={[SkeletonElementType.TITLE, SkeletonElementType.BLOCK]} />
                <Skeleton variant="primary" rounded elements={[SkeletonElementType.TITLE, SkeletonElementType.BLOCK]} />
                <Skeleton variant="primary" rounded elements={[SkeletonElementType.TITLE, SkeletonElementType.BLOCK]} />
            </Col>
        )
    }

    if (isError || !data) {
        return <Info subTitle={t("пусто")} status={InfoStatus.WARNING} />
    }

    return (
        <Col data-testid="NotificationList" className={classnames(cls, ["notification_list"], {}, [className])}>
            <Button Icon={RefreshIcon} onClick={refetch} className={cls.refresh__icon} />
            {data?.map((item: Notification) => (
                <NotificationItem item={item} key={item.id} />
            ))}
        </Col>
    )
}
