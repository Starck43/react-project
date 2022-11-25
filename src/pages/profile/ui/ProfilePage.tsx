import {memo, Suspense} from "react"
import {useTranslation} from "react-i18next"

import {profileReducer} from "entities/profile"
import {ProfileCard} from "entities/profile/ui/ProfileCard"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import Header from "shared/ui/header/Header"

import {Page} from "widgets/page"

import {PageLoader} from "widgets/page-loader/PageLoader"


const initialReducers: ReducerList = {profile: profileReducer}

function ProfilePage() {
    const {t} = useTranslation("auth")

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page>
                <Suspense fallback={<PageLoader />}>
                    <div className="container profile-container">
                        <Header title={t("профиль")} shadowed align="center" />
                        <ProfileCard />
                    </div>
                </Suspense>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ProfilePage)
