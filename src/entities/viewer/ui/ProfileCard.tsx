import React, {useState} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {getProfileData} from "entities/viewer/model/selectors/getProfileData"
import {getProfileError} from "entities/viewer/model/selectors/getProfileError"
import {getProfileLoading} from "entities/viewer/model/selectors/getProfileLoading"

import {Logout} from "features/auth/logout"
import {ProfileForm} from "features/update-user-profile/ui/ProfileForm"
import {Button, ButtonFeature} from "shared/ui/button/Button"

import cls from "./ProfileCard.module.sass"


export const ProfileCard = () => {
    const [ isShowLogout, setShowLogout ] = useState(false)
    const [ isShowProfile, setShowProfile ] = useState(false)
    const {t} = useTranslation("auth")

    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileLoading)
    const error = useSelector(getProfileError)

    return (data
            ? (
                <div data-testid="data" id={`user-${data.id}`} className={cls.profile}>
                    <div className={cls.table}>
                        <div className={cls.row}>
                            <span className={cls.cell__title}>{t("ник")}</span>
                            <span className={cls.cell__value}>{data?.username}</span>
                        </div>
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
                            <span className={cls.cell__value}>{data.email}</span>
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
                            onClick={() => setShowLogout(true)}
                        >
                            {t("выйти", {data})}
                        </Button>
                    </div>

                    {isShowProfile && (
                        <ProfileForm
                            data={data}
                            show={isShowProfile}
                            closeHandler={() => setShowProfile((prev) => !prev)}
                        />
                    )}
                    {isShowLogout && (
                        <Logout
                            username={data.username}
                            show={isShowLogout}
                            closeHandler={() => setShowLogout((prev) => !prev)}
                        />
                    )}

                </div>
            )
            : (
                <p>{t("пользователь не существует")}</p>
            )
    )
}
