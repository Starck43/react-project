import {getProfileData} from "entities/profile/model/selectors/getProfileData"
import {getProfileError} from "entities/profile/model/selectors/getProfileError"
import {getProfileLoading} from "entities/profile/model/selectors/getProfileLoading"
import {memo, Suspense, useEffect} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {getUser} from "entities/user"
import {ProfileCard} from "entities/profile/ui/ProfileCard"
import {fetchProfileData, profileReducer} from "entities/profile"
import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import Title from "shared/ui/title/Title"

import {PageLoader} from "widgets/page-loader/PageLoader"


const reducers: ReducerList = {profile: profileReducer}

function ProfilePage() {
    const {t} = useTranslation("auth")
    const {authData} = useSelector(getUser)
    const dispatch = useAppDispatch()

    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileLoading)

    useEffect(() => {
        const fetchedData = fetchProfileData()
        if (authData) dispatch(fetchedData)
    }, [ authData, dispatch ])

    return (
        <DynamicModuleLoader reducers={reducers} destroyOnUnmount>
            <div className="content">
                <Suspense fallback={<PageLoader />}>
                    <div className="container profile-container">
                        <Title>{t("профиль")}</Title>
                        <ProfileCard data={data} isLoading={isLoading} error={error} />
                    </div>
                </Suspense>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ProfilePage)
