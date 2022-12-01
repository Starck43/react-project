import {memo, useState} from "react"
import {useParams} from "react-router-dom"
import {useTranslation} from "react-i18next"

import {profileReducer} from "entities/profile"
import {ProfileCard} from "entities/profile/ui/ProfileCard"

import {Logout} from "features/auth"
import {UpdateProfileForm} from "features/update-profile"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import Header from "shared/ui/header/Header"
import {Info, InfoStatus} from "shared/ui/info/Info"

import {Page} from "widgets/page"


const initialReducers: ReducerList = {profile: profileReducer}

function ProfilePage() {
    const {t} = useTranslation("auth")
    const {id} = useParams<{ id: string }>()

    const [ isShowLogout, setShowLogout ] = useState(false)
    const [ isShowProfile, setShowProfile ] = useState(false)

    if (!id) {
        return (
            <Info
                title={t("ошибка")}
                subtitle={t("пользователь не существует")}
                status={InfoStatus.ERROR}
                align="center"
            />
        )
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page>
                <Header tag="h2" title={t("профиль")} shadowed align="center" />
                <ProfileCard
                    id={id}
                    onShowProfileHandler={setShowProfile}
                    onLogoutHandler={setShowLogout}
                />

                {isShowProfile && (
                    <UpdateProfileForm
                        show={isShowProfile}
                        closeHandler={() => setShowProfile((prev) => !prev)}
                    />
                )}

                {isShowLogout && (
                    <Logout
                        show={isShowLogout}
                        closeHandler={() => setShowLogout((prev) => !prev)}
                    />
                )}
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ProfilePage)
