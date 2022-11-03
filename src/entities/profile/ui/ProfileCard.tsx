import {Country} from "entities/country"
import {fetchProfileData} from "entities/profile"
import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {UpdateProfileForm} from "features/update-profile"
import {Logout} from "features/auth/logout"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"

import {Avatar} from "shared/ui/avatar/Avatar"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Info, InfoStatus} from "shared/ui/info/Info"
import {capitalizeFirstLetter} from "shared/lib/helpers/strings"

import {PageLoader} from "widgets/page-loader/PageLoader"

import {getProfileData} from "../model/selectors/getProfileData"
import {getProfileError} from "../model/selectors/getProfileError"
import {getProfileLoading} from "../model/selectors/getProfileLoading"


import cls from "./ProfileCard.module.sass"
import {translatedCountry} from "../lib"


export const ProfileCard = () => {
    const {i18n, t} = useTranslation("auth")
    const dispatch = useAppDispatch()
    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileLoading)

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            dispatch(fetchProfileData())
        }
    }, [ dispatch ])

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
                        <span className={cls.cell__value}>{capitalizeFirstLetter(data?.name)}</span>
                    </div>
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("фамилия")}</span>
                        <span className={cls.cell__value}>{capitalizeFirstLetter(data?.surname)}</span>
                    </div>
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("email")}</span>
                        <span className={cls.cell__value}>{data?.email?.toLowerCase()}</span>
                    </div>
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("телефон")}</span>
                        <span className={cls.cell__value}>{data?.phone}</span>
                    </div>
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("страна")}</span>
                        <span className={cls.cell__value}>
                            {translatedCountry(data?.country, i18n.language)}
                        </span>
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
                    show={isShowProfile}
                    closeHandler={() => setShowProfile((prev) => !prev)}
                />
            )}
            {data && isShowLogout && (
                <Logout
                    show={isShowLogout}
                    closeHandler={() => setShowLogout((prev) => !prev)}
                />
            )}
        </>
    )
}
