import {getProfileCopy} from "entities/profile/model/selectors/getProfileCopy"
import {memo, useCallback, FormEvent, useMemo} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {Country} from "entities/country/model/types/country"
import {
    profileActions,
    getProfileValidateErrors,
    Profile,
    ValidateProfileError,
} from "entities/profile"
import {capitalizeFirstLetter} from "shared/lib/helpers/strings"

import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {Modal} from "shared/ui/modal/Modal"
import Input from "shared/ui/input/Input"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Info, InfoStatus} from "shared/ui/info/Info"
import {Select} from "shared/ui/select/Select"

import {updateProfileData} from "../model/services/updateProfileData"


// import cls from "./UpdateProfile.module.sass"

export interface ViewerProps {
    show: boolean
    closeHandler?: () => void
}

// let validateErrors: ValidateProfileError[]

export const UpdateProfileForm = memo(({show, closeHandler}: ViewerProps) => {
    const {t} = useTranslation("auth")
    const dispatch = useAppDispatch()
    const copy = useSelector(getProfileCopy)
    const validateErrors = useSelector(getProfileValidateErrors)

    const validateErrorsTranslates = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t("имя и фамилия обязательны"),
        [ValidateProfileError.INCORRECT_EMAIL]: t("некорректно указан email"),
        [ValidateProfileError.INCORRECT_PHONE]: t("некорректно указан номера телефона"),
        [ValidateProfileError.NO_DATA]: t("отсутствуют данные"),
        [ValidateProfileError.SERVER_ERROR]: t("ошибка сервера"),
    }

    const countryOptions = useMemo(() => Object.entries(Country).map((obj) => ({value: obj[0], content: obj[1]})), [])

    const profileClick = useCallback(async (e: FormEvent<Profile>) => {
        e.preventDefault()
        const res = await dispatch(updateProfileData())
        if (res.meta.requestStatus === "fulfilled") {
            closeHandler?.()
        }
    }, [ closeHandler, dispatch ])

    const cancelClick = useCallback(() => {
        dispatch(profileActions.revert())
        closeHandler?.()
    }, [ closeHandler, dispatch ])

    const onInputChange = useCallback((val, name) => {
        dispatch(profileActions.update({[name]: val || ""}))
    }, [ dispatch ])

    const onSelectChange = useCallback((val) => {
        // const value = Country[val as keyof typeof Country]
        console.log("on Select", capitalizeFirstLetter(val))
        dispatch(profileActions.update({country: capitalizeFirstLetter(val) as Country || ""}))
    }, [ dispatch ])

    return (
        <Modal
            header={<h4>{t("изменение профиля")}</h4>}
            open={show}
            onClose={closeHandler}
            className="modal-sm"
        >
            <form onSubmit={profileClick}>
                <Input
                    name="username"
                    value={copy?.username}
                    onChange={onInputChange}
                    placeholder={t("ник")}
                    className="mb-1"
                />
                <Input
                    name="name"
                    value={copy?.name}
                    onChange={onInputChange}
                    placeholder={t("имя")}
                    className="mb-1"
                />
                <Input
                    name="surname"
                    value={copy?.surname}
                    onChange={onInputChange}
                    placeholder={t("фамилия")}
                    className="mb-1"
                />
                <Input
                    name="email"
                    value={copy?.email}
                    onChange={onInputChange}
                    placeholder={t("email")}
                    className="mb-1"
                />
                <Input
                    name="phone"
                    value={copy?.phone}
                    onChange={onInputChange}
                    placeholder={t("телефон")}
                    className="mb-1"
                />
                <Select
                    value={copy?.country?.toUpperCase()}
                    compact
                    options={countryOptions}
                    onChange={onSelectChange}
                    label={t("страна")}
                    className="mb-1"
                />

                <div className="centered g-1 mt-2">
                    {validateErrors?.length && validateErrors.map((error) => (
                        <Info key={error} status={InfoStatus.ERROR} title={validateErrorsTranslates[error]} />
                    ))}
                    <Button
                        type="submit"
                        bordered
                        feature={ButtonFeature.BLANK}
                    >
                        {t("сохранить")}
                    </Button>
                    <Button bordered feature={ButtonFeature.BLANK} onClick={cancelClick}>{t("отмена")}</Button>
                </div>
            </form>
        </Modal>
    )
})
