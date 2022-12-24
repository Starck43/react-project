import {memo, useCallback, useState} from "react"
import {useParams} from "react-router-dom"
import {useTranslation} from "react-i18next"

import {ProfileCard, profileReducer} from "@/entities/profile"

import {Logout} from "@/features/auth"
import {UpdateProfileForm} from "@/features/profile"

import DynamicModuleLoader, {ReducerList} from "@/shared/lib/components/DynamicModuleLoader"
import {Header} from "@/shared/ui/header"

import {Page} from "@/widgets/page"


const initialReducers: ReducerList = {profile: profileReducer}

function ProfilePage() {
    const {t} = useTranslation("auth")
    const {id} = useParams<{ id: string }>()

    const [ isShowProfile, setShowProfile ] = useState(false)
    const [ isShowLogout, setShowLogout ] = useState(false)

    const onCloseProfile = useCallback(() => {
        setShowProfile(false)
    }, [])

    const onCloseLogout = useCallback(() => {
        setShowLogout(false)
    }, [])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page data-testid="ProfilePage">
                <Header tag="h2" title={t("профиль")} shadowed align="center" />
                <ProfileCard
                    id={id}
                    onShowProfile={() => setShowProfile(true)}
                    onLogout={() => setShowLogout(true)}
                />

                {isShowProfile && (
                    <UpdateProfileForm
                        show={isShowProfile}
                        closeHandler={onCloseProfile}
                    />
                )}

                {isShowLogout && (
                    <Logout
                        show={isShowLogout}
                        closeHandler={onCloseLogout}
                    />
                )}
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ProfilePage)
