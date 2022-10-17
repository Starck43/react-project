import {Logout} from "features/auth/logout"
import React, {useState} from "react"
import {useTranslation} from "react-i18next"

import {Profile} from "features/user-profile/ui/Profile"
import {classnames} from "shared/lib/helpers/classnames"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {UserProps} from "entities/user"

import cls from "./Viewer.module.sass"


export const Viewer = ({userAuth, userDetails, className}: UserProps) => {
    const [ isShowLogout, setShowLogout ] = useState(false)
    const [ isShowProfile, setShowProfile ] = useState(false)
    const {t} = useTranslation("auth")

    return (userAuth
            ? (
                <div id={`user-${userAuth.id}`} className={classnames(cls, [ "profile", className ])}>
                    <div className={cls.table}>
                        <div className={cls.row}>
                            <span className={cls.cell__title}>{t("ник")}</span>
                            <span className={cls.cell__value}>{userAuth?.username || userDetails?.email}</span>
                        </div>
                        <div className={cls.row}>
                            <span className={cls.cell__title}>{t("имя")}</span>
                            <span className={cls.cell__value}>{userDetails?.name}</span>
                        </div>
                        <div className={cls.row}>
                            <span className={cls.cell__title}>{t("фамилия")}</span>
                            <span className={cls.cell__value}>{userDetails?.surname}</span>
                        </div>
                        <div className={cls.row}>
                            <span className={cls.cell__title}>{t("email")}</span>
                            <span className={cls.cell__value}>{userDetails?.email}</span>
                        </div>
                        <div className={cls.row}>
                            <span className={cls.cell__title}>{t("телефон")}</span>
                            <span className={cls.cell__value}>{userDetails?.phone}</span>
                        </div>
                    </div>

                    <div className="flex-end g-1 w-100 mt-2">
                        <Button
                            feature={ButtonFeature.BLANK}
                            bordered
                            onClick={() => setShowProfile(true)}
                        >
                            {t("изменить")}
                        </Button>

                        <Button
                            feature={ButtonFeature.BLANK}
                            bordered
                            onClick={() => setShowLogout(true)}
                        >
                            {t("выйти", {userAuth})}
                        </Button>
                    </div>

                    {isShowProfile && (
                        <Profile
                            userAuth={userAuth}
                            userDetails={userDetails}
                            show={isShowProfile}
                            closeHandler={() => setShowProfile((prev) => !prev)}
                        />
                    )}
                    {isShowLogout && (
                        <Logout
                            username={userAuth.username}
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
