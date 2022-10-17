import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {LoginForm} from "features/auth/by-username"
import {Viewer} from "entities/user/ui/Viewer"
import {getUser} from "entities/user"

import Title from "shared/ui/title/Title"
import {Suspense} from "react"
import {PageLoader} from "widgets/page-loader/PageLoader"


const AuthPage = () => {
    const {userAuth, userDetails} = useSelector(getUser)
    const {t} = useTranslation("auth")

    return (
        <div className="content">
            {userAuth?.username
                ? (
                    <div className="container profile-container">
                        <Title>{t("профиль")}</Title>
                        <Viewer userAuth={userAuth} userDetails={userDetails} />
                    </div>
                )
                : (
                    <Suspense fallback={<PageLoader />}>
                        <div className="container login-container">
                            <Title>{t("войти")}</Title>
                            <LoginForm />
                        </div>
                    </Suspense>
                )}
        </div>
    )
}

export default AuthPage
