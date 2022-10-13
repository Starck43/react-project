import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {Login} from "features/auth/by-username"
import {Viewer} from "entities/user/ui/Viewer"
import {getAuthUser} from "entities/user"

import Title from "shared/ui/title/Title"


const AuthPage = () => {
    const {t} = useTranslation("auth")
    const authUser = useSelector(getAuthUser)

    return (
        <div className="content">
            {authUser?.username
                ? (
                    <div className="container profile-container">
                        <Title>{t("профиль")}</Title>
                        <Viewer user={authUser} />
                    </div>
                )
                : (
                    <div className="container login-container">
                        <Title>{t("войти")}</Title>
                        <Login />
                    </div>
                )}
        </div>
    )
}

export default AuthPage
