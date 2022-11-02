import React, {Suspense} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {getUser} from "entities/user"
import {LoginForm} from "features/auth/login/by-username"
import {Info, InfoStatus} from "shared/ui/info/Info"
import {NavLink} from "shared/ui/link/NavLink"

import Title from "shared/ui/title/Title"
import {AppRoutes, RoutesPath} from "shared/config/router"

import {PageLoader} from "widgets/page-loader/PageLoader"


function AuthPage() {
    const authData = useSelector(getUser)
    const {t} = useTranslation("auth")
    const username = authData?.username

    const successLoginHandler = () => {
        console.log("success")
    }

    if (authData) {
        return (
            <Info title={t("вы уже вошли под именем", {username})} status={InfoStatus.SUCCESS} align="center">
                <NavLink to={RoutesPath[AppRoutes.PROFILE]}>
                    {t("перейти в профиль")}
                </NavLink>
            </Info>
        )
    }

    return (
        <div className="content">
            <Suspense fallback={<PageLoader />}>
                <div className="container login-container">
                    <Title shadowed align="center">{t("войти")}</Title>
                    <LoginForm onSuccess={successLoginHandler} />
                </div>
            </Suspense>
        </div>
    )
}

export default AuthPage
