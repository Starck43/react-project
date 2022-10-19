import {viewerReducer} from "entities/viewer"
import {memo, Suspense} from "react"
import {Navigate} from "react-router-dom"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {Viewer} from "entities/viewer/ui/Viewer"
import {getUser} from "entities/user"
import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"

import Title from "shared/ui/title/Title"
import {AppRoutes, RoutesPath} from "shared/config/router"
import {PageLoader} from "widgets/page-loader/PageLoader"


const reducers: ReducerList = {viewer: viewerReducer}

function ProfilePage() {
    const {userAuth, userDetails} = useSelector(getUser)
    const {t} = useTranslation("auth")

    return (
        <DynamicModuleLoader reducers={reducers} destroyOnUnmount>
            <div className="content">
                {userAuth?.username
                ? (
                    <Suspense fallback={<PageLoader />}>
                        <div className="container profile-container">
                            <Title>{t("профиль")}</Title>
                            <Viewer userAuth={userAuth} userDetails={userDetails} />
                        </div>
                    </Suspense>
                )
                : (
                    <Navigate to={RoutesPath[AppRoutes.AUTH]} />
                )}
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ProfilePage)
