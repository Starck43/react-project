import {FormEvent, memo, useCallback} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import {
    getProfileCopy, getProfileValidateErrors, Profile, profileActions, ValidateProfileError,
} from "entities/profile"
import {Country} from "entities/country"

import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {enumToArray, getValueForStringEnum} from "shared/lib/helpers/enum"
import {capitalizeFirstLetter} from "shared/lib/helpers/strings"

import {Button} from "shared/ui/button/Button"
import {ButtonFeature} from "shared/ui/button/consts"
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

    const onInputChange = useCallback((val: string, name: string | undefined) => {
        if (name) {
            dispatch(profileActions.updateCopy({[name]: val}))
        }
    }, [ dispatch ])

    const onSelectChange = useCallback((val: string) => {
        dispatch(profileActions.updateCopy({country: capitalizeFirstLetter(val) as Country}))
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
                    data-testid="UpdateProfileForm.Username"
                    name="username"
                    value={copy?.username}
                    onChange={onInputChange}
                    placeholder={t("ник") as string}
                    className="mb-1"
                />
                <Input
                    data-testid="UpdateProfileForm.Name"
                    name="name"
                    value={copy?.name}
                    onChange={onInputChange}
                    placeholder={t("имя") as string}
                    className="mb-1"
                />
                <Input
                    data-testid="UpdateProfileForm.Surname"
                    name="surname"
                    value={copy?.surname}
                    onChange={onInputChange}
                    placeholder={t("фамилия") as string}
                    className="mb-1"
                />
                <Input
                    data-testid="UpdateProfileForm.Email"
                    name="email"
                    value={copy?.email}
                    onChange={onInputChange}
                    placeholder={t("email") as string}
                    className="mb-1"
                />
                <Input
                    data-testid="UpdateProfileForm.Phone"
                    name="phone"
                    value={copy?.phone}
                    onChange={onInputChange}
                    placeholder={t("телефон") as string}
                    className="mb-1"
                />
                <ListBox
                    data-testid="UpdateProfileForm.Country"
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
                    {validateErrors?.map((error: ValidateProfileError) => (
                        <Info
                            data-testid="UpdateProfileForm.ValidateErrors"
                            key={error}
                            status={InfoStatus.ERROR}
                            subTitle={validateErrorsTranslates[error]}
                        />
                    ))}
                    <Button
                        data-testid="UpdateProfileForm.SaveButton"
                        feature={ButtonFeature.BLANK}
                        type="submit"
                        bordered
                    >
                        {t("сохранить")}
                    </Button>
                    <Button
                        data-testid="UpdateProfileForm.CancelButton"
                        feature={ButtonFeature.BLANK}
                        bordered
                        onClick={cancelClick}
                    >
                        {t("отмена")}
                    </Button>
                </Row>
            </form>
        </Modal>
    )
})
