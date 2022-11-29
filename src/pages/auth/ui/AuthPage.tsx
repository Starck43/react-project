import React, {Suspense} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

import {getUser, User} from "entities/user"

import {LoginForm} from "features/auth"

import {AppRoutes, RoutesPath} from "shared/config/router"
import {Info, InfoStatus} from "shared/ui/info/Info"
import {NavLink} from "shared/ui/link/NavLink"
import Header from "shared/ui/header/Header"
import {Col} from "shared/ui/stack"

import {Page} from "widgets/page"
import {PageLoader} from "widgets/page-loader/PageLoader"


function AuthPage() {
    const authData = useSelector(getUser)
    const {t} = useTranslation("auth")
    const username = authData?.username
    const navigate = useNavigate()

    const successLoginHandler = (res: User) => {
        // console.log("Login success:", res)
        navigate(RoutesPath[AppRoutes.PROFILE] + res.id)
    }

    if (authData?.id) {
        return (
            <Col align="center" fullWidth>
                <Info
                    title={t("вы уже вошли под именем", {username})}
                    status={InfoStatus.WARNING}
                    align="center"
                />
                <NavLink
                    to={RoutesPath[AppRoutes.PROFILE] + authData.id}
                    title={t("перейти в профиль")}
                />
            </Col>
        )
    }

    return (
        <Suspense fallback={<PageLoader />}>
            <Page>
                <Header tag="h2" title={t("войти")} shadowed align="center" />
                <LoginForm onSuccess={successLoginHandler} />
            </Page>
        </Suspense>
    )
}

export default AuthPage
