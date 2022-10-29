import React, {useState} from "react"
import {useTranslation} from "react-i18next"

import {ProfileSchema} from "entities/profile"
import {UpdateProfileForm} from "features/update-profile"
import {Logout} from "features/auth/logout"
import {Avatar} from "shared/ui/avatar/Avatar"

import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Info, InfoStatus} from "shared/ui/info/Info"
import {PageLoader} from "widgets/page-loader/PageLoader"

import cls from "./ProfileCard.module.sass"


export const ProfileCard = ({data, error, isLoading}: ProfileSchema) => {
    const {t} = useTranslation("auth")
    const [ isShowLogout, setShowLogout ] = useState(false)
    const [ isShowProfile, setShowProfile ] = useState(false)

    if (error) {
        return (
            <Info title={t("произошла ошибка")} status={InfoStatus.ERROR} align="center">
                {t("попробуйте перезагрузить страницу")}
            </Info>
        )
    }

    // @ts-ignore
    return (
        <>
            <div data-testid="profile-card" className={cls.profile}>
                {isLoading && <PageLoader />}
                <div className={cls.table}>
                    <Avatar src={data?.avatar} rounded alt={data?.username} />
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("имя")}</span>
                        <span className={cls.cell__value}>{data?.name}</span>
                    </div>
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("фамилия")}</span>
                        <span className={cls.cell__value}>{data?.surname}</span>
                    </div>
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("email")}</span>
                        <span className={cls.cell__value}>{data?.email}</span>
                    </div>
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("телефон")}</span>
                        <span className={cls.cell__value}>{data?.phone}</span>
                    </div>
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("страна")}</span>
                        <span className={cls.cell__value}>{data?.country}</span>
                    </div>
                </div>

                <div className="flex-end g-1 w-100 mt-2">
                    <Button
                        feature={ButtonFeature.BLANK}
                        bordered
                        disabled={isLoading}
                        onClick={() => setShowProfile(true)}
                    >
                        {t("изменить")}
                    </Button>

                    <Button
                        data-testid="logoutBtn"
                        feature={ButtonFeature.BLANK}
                        bordered
                        disabled={isLoading}
                        onClick={() => setShowLogout(true)}
                    >
                        {t("выйти", {data})}
                    </Button>
                </div>
            </div>

            {data && isShowProfile && (
                <UpdateProfileForm
                    data={data}
                    show={isShowProfile}
                    closeHandler={() => setShowProfile((prev) => !prev)}
                />
            )}
            {data && isShowLogout && (
                <Logout
                    username={data.username}
                    show={isShowLogout}
                    closeHandler={() => setShowLogout((prev) => !prev)}
                />
            )}
        </>
    )
}
