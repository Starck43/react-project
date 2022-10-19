import {memo, Suspense} from "react"
import {Navigate} from "react-router-dom"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {getUser} from "entities/user"
import {LoginForm} from "features/auth/by-username"

import Title from "shared/ui/title/Title"
import {AppRoutes, RoutesPath} from "shared/config/router"

import {PageLoader} from "widgets/page-loader/PageLoader"


function AuthPage() {
    const {userAuth} = useSelector(getUser)
    const {t} = useTranslation("auth")
    const successLoginHandler = () => {
        console.log("success")
    }

    return (
        <div className="content">
            {userAuth?.username
                ? (
                    <Navigate to={RoutesPath[AppRoutes.PROFILE]} />
                )
                : (
                    <Suspense fallback={<PageLoader />}>
                        <div className="container login-container">
                            <Title shadowed>{t("войти")}</Title>
                            <LoginForm onSuccess={successLoginHandler} />
                        </div>
                    </Suspense>
                )}
        </div>
    )
}

export default memo(AuthPage)
