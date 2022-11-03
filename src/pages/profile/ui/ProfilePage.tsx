import {memo, Suspense} from "react"
import {useTranslation} from "react-i18next"

import {profileReducer} from "entities/profile"
import {ProfileCard} from "entities/profile/ui/ProfileCard"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import Title from "shared/ui/title/Title"

import {PageLoader} from "widgets/page-loader/PageLoader"


const reducers: ReducerList = {profile: profileReducer}

function ProfilePage() {
    const {t} = useTranslation("auth")

    return (
        <DynamicModuleLoader reducers={reducers} destroyOnUnmount>
            <div className="content">
                <Suspense fallback={<PageLoader />}>
                    <div className="container profile-container">
                        <Title>{t("профиль")}</Title>
                        <ProfileCard />
                    </div>
                </Suspense>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ProfilePage)
