import React, {useState} from "react"
import {useTranslation} from "react-i18next"

import {Profile} from "features/auth/by-username/ui/profile/Profile"
import {Logout} from "features/auth/by-username"
import {classnames} from "shared/lib/helpers/classnames"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {UserProps} from "entities/user"

import cls from "./Viewer.module.sass"


export const Viewer = ({user, data, className}: UserProps) => {
    const [ isShowLogout, setShowLogout ] = useState(false)
    const [ isShowProfile, setShowProfile ] = useState(false)
    const {t} = useTranslation("auth")

    return (user
            ? (
                <div id={`user-${user.id}`} className={classnames(cls, [ "profile", className ])}>
                    <div className={cls.table}>
                        <div className={cls.row}>
                            <span className={cls.cell__title}>{t("ник")}</span>
                            <span className={cls.cell__value}>{user?.username}</span>
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
                            <span className={cls.cell__value}>{data?.email}</span>
                        </div>
                        <div className={cls.row}>
                            <span className={cls.cell__title}>{t("телефон")}</span>
                            <span className={cls.cell__value}>{data?.phone}</span>
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
                            {t("выйти")}
                        </Button>
                    </div>

                    {isShowProfile && (
                        <Profile
                            show={isShowProfile}
                            handler={() => setShowProfile((prev) => !prev)}
                        />
                    )}
                    {isShowLogout && (
                        <Logout
                            show={isShowLogout}
                            handler={() => setShowLogout((prev) => !prev)}
                        />
                    )}

                </div>
            )
            : (
                <p>{t("пользователь не существует")}</p>
            )
    )
}
