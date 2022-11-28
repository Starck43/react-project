import {FormEvent, memo, useCallback} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import {
    getProfileCopy, getProfileValidateErrors,
    Profile, profileActions, ValidateProfileError,
} from "entities/profile"
import {Country} from "entities/country"

import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {enumToArray, getValueForStringEnum} from "shared/lib/helpers/enum"
import {capitalizeFirstLetter} from "shared/lib/helpers/strings"

import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Info, InfoStatus} from "shared/ui/info/Info"
import Input from "shared/ui/input/Input"
import ListBox from "shared/ui/listbox/ListBox"
import {Modal} from "shared/ui/modal/Modal"
import {Row} from "shared/ui/stack"

import {updateProfileData} from "../model/services/updateProfileData"


// import cls from "./UpdateProfile.module.sass"

export interface ViewerProps {
    show: boolean
    closeHandler?: () => void
}


export const UpdateProfileForm = memo(({show, closeHandler}: ViewerProps) => {
    const {i18n, t} = useTranslation("auth")
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

    const submitUpdateClick = useCallback(async (e: FormEvent<Profile>) => {
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
        if (val) {
            dispatch(profileActions.update({country: capitalizeFirstLetter(val) as Country}))
        }
    }, [ dispatch ])

    return (
        <Modal
            header={<h4>{t("изменение профиля")}</h4>}
            open={show}
            onClose={closeHandler}
            className="modal-sm"
        >
            <form onSubmit={submitUpdateClick}>
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
                <ListBox
                    variant="secondary"
                    name="country"
                    label={t("страна")}
                    items={enumToArray(Country, i18n.language === "en")}
                    selectedOption={copy?.country && {
                        value: copy.country.toUpperCase(),
                        content: i18n.language === "en"
                            ? capitalizeFirstLetter(copy.country)
                            : getValueForStringEnum(Country, copy.country.toUpperCase()),
                    }}
                    position="top_left"
                    compact
                    onChange={onSelectChange}
                    className="mb-1"
                />

                <Row align="end" gap="sm" wrap fullWidth>
                    {validateErrors?.length && validateErrors.map((error) => (
                        <Info key={error} status={InfoStatus.ERROR} subtitle={validateErrorsTranslates[error]} />
                    ))}
                    <Button
                        type="submit"
                        bordered
                        feature={ButtonFeature.BLANK}
                    >
                        {t("сохранить")}
                    </Button>
                    <Button bordered feature={ButtonFeature.BLANK} onClick={cancelClick}>{t("отмена")}</Button>
                </Row>
            </form>
        </Modal>
    )
})
