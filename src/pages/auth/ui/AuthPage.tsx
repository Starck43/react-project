import {memo} from "react"
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {getUser, User} from "@/entities/user"

import {LoginForm} from "@/features/auth"
import {AppRoutes, RoutesPath} from "@/shared/const/router"

import {Info, InfoStatus} from "@/shared/ui/info"
import {NavLink} from "@/shared/ui/link"
import {Header} from "@/shared/ui/header"
import {Col} from "@/shared/ui/stack"

import {Page} from "@/widgets/page"


function AuthPage() {
    const {t} = useTranslation("auth")
    const navigate = useNavigate()
    const authData = useSelector(getUser)
    const username = authData?.username

    const successLoginHandler = (res: User) => {
        // console.log("Login success:", res)
        navigate(RoutesPath[AppRoutes.PROFILE] + res.id)
    }

    if (authData?.id) {
        return (
            <Col align="center" gap="md" fullWidth>
                <Info
                    title={t("вы уже вошли под именем", {username})}
                    status={InfoStatus.WARNING}
                />
                <NavLink
                    to={RoutesPath[AppRoutes.PROFILE] + authData.id}
                    title={t("перейти в профиль")}
                />
            </Col>
        )
    }

    return (
        <Page>
            <Header tag="h2" title={t("войти")} shadowed align="center" />
            <LoginForm onSuccess={successLoginHandler} />
        </Page>
    )
}

export default memo(AuthPage)
