import React, {useState} from "react"
import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {useTranslation} from "react-i18next"

import {getUser} from "entities/user"
import {Logout} from "features/auth/logout"
import {UpdateProfileForm} from "features/update-profile"

import {capitalizeFirstLetter} from "shared/lib/helpers/strings"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"

import {Avatar} from "shared/ui/avatar/Avatar"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Info, InfoAlign, InfoStatus} from "shared/ui/info/Info"
import {Skeleton, SkeletonElementType} from "shared/ui/skeleton/Skeleton"

import {getProfileData} from "../model/selectors/getProfileData"
import {getProfileError} from "../model/selectors/getProfileError"
import {getProfileLoading} from "../model/selectors/getProfileLoading"
import {fetchProfileData} from "../model/services/fetchProfileData"


import {translatedCountry} from "../lib"
import cls from "./ProfileCard.module.sass"


export const ProfileCard = () => {
    const {i18n, t} = useTranslation("auth")
    const dispatch = useAppDispatch()
    const auth = useSelector(getUser)
    const profile = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileLoading)
    const {id} = useParams<{ id: string }>()
    const hasAccess = profile && auth?.id === profile?.id

    useInitialEffect(() => {
        dispatch(fetchProfileData(id))
    })

    const [ isShowLogout, setShowLogout ] = useState(false)
    const [ isShowProfile, setShowProfile ] = useState(false)

    if (error) {
        return (
            <Info
                title={t("произошла ошибка")}
                subtitle={t("попробуйте перезагрузить страницу")}
                status={InfoStatus.ERROR}
                align={InfoAlign.CENTER}
            />
        )
    }

    // @ts-ignore
    return (
        <>
            <div data-testid="profile-card" className={cls.profile}>
                {isLoading && <Skeleton rounded elements={[ SkeletonElementType.AVATAR, SkeletonElementType.BLOCK ]} />}
                <div className={cls.table}>
                    <Avatar src={profile?.avatar} rounded alt={profile?.username} />
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("имя")}</span>
                        <span className={cls.cell__value}>{capitalizeFirstLetter(profile?.name)}</span>
                    </div>
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("фамилия")}</span>
                        <span className={cls.cell__value}>{capitalizeFirstLetter(profile?.surname)}</span>
                    </div>
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("email")}</span>
                        <span className={cls.cell__value}>{profile?.email?.toLowerCase()}</span>
                    </div>
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("телефон")}</span>
                        <span className={cls.cell__value}>{profile?.phone}</span>
                    </div>
                    <div className={cls.row}>
                        <span className={cls.cell__title}>{t("страна")}</span>
                        <span className={cls.cell__value}>
                            {translatedCountry(profile?.country, i18n.language)}
                        </span>
                    </div>
                </div>

                {/* TODO: check if user is authorized */}
                {hasAccess
                && (
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
                        profile-testid="logoutBtn"
                        feature={ButtonFeature.BLANK}
                        bordered
                        disabled={isLoading}
                        onClick={() => setShowLogout(true)}
                    >
                        {t("выйти", {profile})}
                    </Button>
                </div>
)}
            </div>

            {hasAccess && isShowProfile && (
                <UpdateProfileForm
                    show={isShowProfile}
                    closeHandler={() => setShowProfile((prev) => !prev)}
                />
            )}
            {hasAccess && isShowLogout && (
                <Logout
                    show={isShowLogout}
                    closeHandler={() => setShowLogout((prev) => !prev)}
                />
            )}
        </>
    )
}
