import {PayloadAction} from "@reduxjs/toolkit"
import React, {Suspense} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

import {getUser, User} from "entities/user"

import {LoginForm} from "features/auth/login/by-username"

import {AppRoutes, RoutesPath} from "shared/config/router"
import {Info, InfoAlign, InfoStatus} from "shared/ui/info/Info"
import {NavLink} from "shared/ui/link/NavLink"
import Header, {HeaderAlign} from "shared/ui/header/Header"

import {PageLoader} from "widgets/page-loader/PageLoader"


function AuthPage() {
    const authData = useSelector(getUser)
    const {t} = useTranslation("auth")
    const username = authData?.username
    const navigate = useNavigate()

    const successLoginHandler = (res: User) => {
        console.log("Login success:", res)
        navigate(RoutesPath[AppRoutes.PROFILE] + res.id)
    }

    if (authData?.id) {
        return (
            <div className="centered vertical w-100">
                <Info
                    title={t("вы уже вошли под именем", {username})}
                    status={InfoStatus.WARNING}
                    align={InfoAlign.CENTER}
                />
                <NavLink to={RoutesPath[AppRoutes.PROFILE] + authData.id}>
                    {t("перейти в профиль")}
                </NavLink>
            </div>
        )
    }

    return (
        <div className="content">
            <Suspense fallback={<PageLoader />}>
                <div className="container login-container">
                    <Header title={t("войти")} shadowed align={HeaderAlign.CENTER} />
                    <LoginForm onSuccess={successLoginHandler} />
                </div>
            </Suspense>
        </div>
    )
}

export default AuthPage
