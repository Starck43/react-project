import {memo, Suspense, useEffect} from "react"
import {Navigate} from "react-router-dom"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {ProfileCard} from "entities/viewer/ui/ProfileCard"
import {fetchProfileData, viewerReducer} from "entities/viewer"
import {getUser} from "entities/user"
import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"

import Title from "shared/ui/title/Title"
import {AppRoutes, RoutesPath} from "shared/config/router"
import {PageLoader} from "widgets/page-loader/PageLoader"


const reducers: ReducerList = {viewer: viewerReducer}

function ProfilePage() {
    const {userAuth} = useSelector(getUser)
    const {t} = useTranslation("auth")
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [ dispatch ])

    return (
        <DynamicModuleLoader reducers={reducers} destroyOnUnmount>
            <div className="content">
                {userAuth?.username
                    ? (
                        <Suspense fallback={<PageLoader />}>
                            <div className="container profile-container">
                                <Title>{t("профиль")}</Title>
                                <ProfileCard />
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
