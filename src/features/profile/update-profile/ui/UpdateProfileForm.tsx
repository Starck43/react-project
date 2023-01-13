import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import {
    getProfileValidateErrors,
    profileActions,
    ValidateProfileError,
    updateProfileData,
    getProfileForm,
} from "@/entities/profile"
import { Country } from "@/entities/country"

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch"
import { enumToArray, getValueForStringEnum } from "@/shared/lib/helpers/enum"
import { capitalizeFirstLetter } from "@/shared/lib/helpers/strings"

import { ListBox } from "@/shared/ui/popups"
import { Info, InfoStatus } from "@/shared/ui/info"
import { Input } from "@/shared/ui/input"
import { Modal } from "@/shared/ui/modals"
import { Row } from "@/shared/ui/stack"

// import cls from "./UpdateProfile.module.sass"

export interface ViewerProps {
    show: boolean
    closeHandler?: () => void
}

export const UpdateProfileForm = memo(({ show, closeHandler }: ViewerProps) => {
    const { i18n, t } = useTranslation("auth")
    const dispatch = useAppDispatch()
    const form = useSelector(getProfileForm)
    const validateErrors = useSelector(getProfileValidateErrors)

    const validateErrorsTranslates = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t("имя и фамилия обязательны"),
        [ValidateProfileError.INCORRECT_EMAIL]: t("некорректно указан email"),
        [ValidateProfileError.INCORRECT_PHONE]: t("некорректно указан номера телефона"),
        [ValidateProfileError.NO_DATA]: t("отсутствуют данные"),
        [ValidateProfileError.SERVER_ERROR]: t("ошибка сервера"),
    }

    const submitUpdateClick = useCallback(async () => {
        // dispatch and fetch form data on server
        const res = await dispatch(updateProfileData())
        if (res.meta.requestStatus === "fulfilled") {
            closeHandler?.()
        }
    }, [closeHandler, dispatch])

    const cancelClick = useCallback(() => {
        dispatch(profileActions.revertFormState())
        closeHandler?.()
    }, [closeHandler, dispatch])

    const onInputChange = useCallback(
        (val: string, name: string | undefined) => {
            if (name) {
                dispatch(profileActions.updateFormState({ [name]: val }))
            }
        },
        [dispatch],
    )

    const onSelectChange = useCallback(
        (val: string) => {
            dispatch(
                profileActions.updateFormState({
                    country: capitalizeFirstLetter(val) as Country,
                }),
            )
        },
        [dispatch],
    )

    return (
        <Modal
            header={<h4>{t("изменение профиля")}</h4>}
            open={show}
            onSubmit={submitUpdateClick}
            onClose={cancelClick}
            primaryBtnLabel={t("сохранить")}
            secondaryBtnLabel={t("отмена")}
            rounded
            bordered
            size="auto"
            className="modal-sm"
        >
            <Input
                data-testid="UpdateProfileForm.Username"
                name="username"
                value={form?.username}
                onChange={onInputChange}
                placeholder={t("ник") || ""}
            />
            <Input
                data-testid="UpdateProfileForm.Name"
                name="name"
                value={form?.name}
                onChange={onInputChange}
                placeholder={t("имя") || ""}
            />
            <Input
                data-testid="UpdateProfileForm.Surname"
                name="surname"
                value={form?.surname}
                onChange={onInputChange}
                placeholder={t("фамилия") || ""}
            />
            <Input
                data-testid="UpdateProfileForm.Email"
                name="email"
                value={form?.email}
                onChange={onInputChange}
                placeholder={t("email") || ""}
            />
            <Input
                data-testid="UpdateProfileForm.Phone"
                name="phone"
                value={form?.phone}
                onChange={onInputChange}
                placeholder={t("телефон") || ""}
            />

            <ListBox
                data-testid="UpdateProfileForm.Country"
                variant="secondary"
                name="country"
                label={t("страна")}
                items={enumToArray(Country, i18n.language === "en")}
                selectedOption={
                    form?.country && {
                        value: form.country.toUpperCase(),
                        content:
                            i18n.language === "en"
                                ? capitalizeFirstLetter(form.country)
                                : getValueForStringEnum(Country, form.country.toUpperCase()),
                    }
                }
                position="top_left"
                compact
                onChange={onSelectChange}
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
            </Row>
        </Modal>
    )
})
