import {fetchProfileData, getProfileValidateErrors, profileReducer, ValidateProfileError} from "entities/profile"
import {getProfileData} from "entities/profile/model/selectors/getProfileData"
import {getProfileError} from "entities/profile/model/selectors/getProfileError"
import {getProfileLoading} from "entities/profile/model/selectors/getProfileLoading"
import {ProfileCard} from "entities/profile/ui/ProfileCard"

import {getUser} from "entities/user"
import {memo, Suspense, useEffect} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"
import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {Info, InfoStatus} from "shared/ui/info/Info"
import Title from "shared/ui/title/Title"

import {PageLoader} from "widgets/page-loader/PageLoader"


const reducers: ReducerList = {profile: profileReducer}

function ProfilePage() {
    const {t} = useTranslation("auth")
    const authData = useSelector(getUser)
    const dispatch = useAppDispatch()

    const data = useSelector(getProfileData)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileLoading)
    const validateErrors = useSelector(getProfileValidateErrors)

    const validateErrorsTranslates = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t("имя и фамилия обязательны"),
        [ValidateProfileError.INCORRECT_EMAIL]: t("некорректно указан email"),
        [ValidateProfileError.INCORRECT_PHONE]: t("некорректно указан номера телефона"),
        [ValidateProfileError.NO_DATA]: t("отсутствуют данные"),
        [ValidateProfileError.SERVER_ERROR]: t("ошибка сервера"),
    }

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            const fetchedData = fetchProfileData()
            if (authData) dispatch(fetchedData)
        }
    }, [ authData, dispatch ])

    return (
        <DynamicModuleLoader reducers={reducers} destroyOnUnmount>
            <div className="content">
                <Suspense fallback={<PageLoader />}>
                    <div className="container profile-container">
                        <Title>{t("профиль")}</Title>
                        {validateErrors?.length && validateErrors.map((error) => (
                            <Info key={error} status={InfoStatus.ERROR} title={validateErrorsTranslates[error]} />
                        ))}
                        <ProfileCard data={data} isLoading={isLoading} error={error} />
                    </div>
                </Suspense>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ProfilePage)
