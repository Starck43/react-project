import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

import { getUser } from "@/entities/user"

import { capitalizeFirstLetter } from "@/shared/lib/helpers/strings"
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect"
import { Avatar } from "@/shared/ui/avatar"
import { Button, ButtonFeature } from "@/shared/ui/button"
import { Info, InfoStatus } from "@/shared/ui/info"
import { Skeleton, SkeletonElementType } from "@/shared/ui/skeleton"
import { Row } from "@/shared/ui/stack"

import { getProfileData, getProfileError, getProfileLoading } from "../model/selectors/getProfile"
import { fetchProfileData } from "../model/services/fetchProfileData"

import { translatedCountry } from "../lib"

import cls from "./ProfileCard.module.sass"

// TODO: Fix skeleton styles

interface ProfileCardProps {
    id?: string
    onShowProfile?: () => void
    onLogout?: () => void
}

export const ProfileCard = ({ id, onShowProfile, onLogout }: ProfileCardProps) => {
    const { i18n, t } = useTranslation("auth")
    const dispatch = useAppDispatch()
    const profile = useSelector(getProfileData)
    const isLoading = useSelector(getProfileLoading)
    const error = useSelector(getProfileError)
    const auth = useSelector(getUser)
    const hasAccess = profile && auth?.id === profile?.id

    useInitialEffect(() => {
        dispatch(fetchProfileData(id))
    }, Boolean(id))

    if (error) {
        return (
            <Info
                title={t("произошла ошибка")}
                subTitle={t("попробуйте перезагрузить страницу")}
                status={InfoStatus.ERROR}
            />
        )
    }

    return (
        <div data-testid="ProfileCard" className={cls.profile}>
            {isLoading && <Skeleton rounded elements={[SkeletonElementType.AVATAR, SkeletonElementType.BLOCK]} />}

            <div className={cls.table}>
                <Avatar src={profile?.avatar} alt={profile?.username} size="sm" rounded />
                <div className={cls.row} id="Username">
                    <span className={cls.cell__title}>{t("ник")}</span>
                    <span className={cls.cell__value} data-testid="ProfileCard.Username">
                        {profile?.username}
                    </span>
                </div>
                <div className={cls.row} id="Name">
                    <span className={cls.cell__title}>{t("имя")}</span>
                    <span className={cls.cell__value} data-testid="ProfileCard.Name">
                        {capitalizeFirstLetter(profile?.name)}
                    </span>
                </div>
                <div className={cls.row} id="Surname">
                    <span className={cls.cell__title}>{t("фамилия")}</span>
                    <span className={cls.cell__value} data-testid="ProfileCard.Surname">
                        {capitalizeFirstLetter(profile?.surname)}
                    </span>
                </div>
                <div className={cls.row} id="Email">
                    <span className={cls.cell__title}>{t("email")}</span>
                    <span className={cls.cell__value} data-testid="ProfileCard.Email">
                        {profile?.email?.toLowerCase()}
                    </span>
                </div>
                <div className={cls.row} id="Phone">
                    <span className={cls.cell__title}>{t("телефон")}</span>
                    <span className={cls.cell__value} data-testid="ProfileCard.Phone">
                        {profile?.phone}
                    </span>
                </div>
                <div className={cls.row} id="Country">
                    <span className={cls.cell__title}>{t("страна")}</span>
                    <span className={cls.cell__value} data-testid="ProfileCard.Country">
                        {translatedCountry(profile?.country, i18n.language)}
                    </span>
                </div>
            </div>

            {hasAccess && (
                <Row justify="end" gap="sm" fullWidth className="mt-2">
                    <Button
                        data-testid="ProfileCard.EditButton"
                        feature={ButtonFeature.BLANK}
                        bordered
                        disabled={isLoading}
                        onClick={onShowProfile}
                    >
                        {t("изменить")}
                    </Button>

                    <Button
                        data-testid="ProfileCard.LogoutButton"
                        feature={ButtonFeature.BLANK}
                        bordered
                        disabled={isLoading}
                        onClick={onLogout}
                    >
                        {t("выйти", { profile })}
                    </Button>
                </Row>
            )}
        </div>
    )
}
