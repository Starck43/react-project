import React, {Suspense} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import {getUser} from "entities/user"

import {LoginForm} from "features/auth/login/by-username"

import {AppRoutes, RoutesPath} from "shared/config/router"
import {Info, InfoAlign, InfoStatus} from "shared/ui/info/Info"
import {NavLink} from "shared/ui/link/NavLink"
import Header, {HeaderAlign} from "shared/ui/title/Header"

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
            <Info title={t("вы уже вошли под именем", {username})} status={InfoStatus.SUCCESS} align={InfoAlign.CENTER}>
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
                    <Header
                        title={t("войти")}
                        shadowed
                        align={HeaderAlign.CENTER}
                    />
                    <LoginForm onSuccess={successLoginHandler} />
                </div>
            </Suspense>
        </div>
    )
}

export default AuthPage
