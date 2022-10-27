import {
    memo, useCallback, useState, FormEvent, useMemo,
} from "react"
import {useTranslation} from "react-i18next"

import {Profile} from "entities/profile"

import {Country} from "entities/country/model/types/country"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import Input from "shared/ui/input/Input"
import {Modal} from "shared/ui/modal/Modal"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Select} from "shared/ui/select/Select"

import {updateProfileData} from "../model/services/updateProfileData"


// import cls from "./UpdateProfile.module.sass"

export interface ViewerProps {
    data: Profile
    show: boolean
    closeHandler?: () => void
}


export const UpdateProfileForm = memo(({data, show, closeHandler}: ViewerProps) => {
    const {t} = useTranslation("auth")
    const [ profileData, setProfileData ] = useState({...data})

    const dispatch = useAppDispatch()

    const countryOptions = useMemo(() => Object.entries(Country).map((obj) => ({value: obj[0], content: obj[1]})), [])

    const updateProfileClick = (e: FormEvent<Profile>) => {
        e.preventDefault()
        dispatch(updateProfileData(profileData))
        closeHandler?.()
    }

    const onInputChange = useCallback((val, name) => {
        setProfileData({...profileData, [name]: val})
    }, [ profileData ])

    const onSelectChange = useCallback((val) => {
        const value = Country[val as keyof typeof Country]
        setProfileData({...profileData, country: value})
    }, [ profileData ])

    return (
        <Modal
            header={<h4>{t("изменение профиля")}</h4>}
            open={show}
            onClose={closeHandler}
            className="sm-modal"
        >
            <form onSubmit={updateProfileClick}>
                <Input
                    name="username"
                    value={profileData.username}
                    onChange={onInputChange}
                    placeholder={t("ник")}
                    className="mb-1"
                />
                <Input
                    name="name"
                    value={profileData.name}
                    onChange={onInputChange}
                    placeholder={t("имя")}
                    className="mb-1"
                />
                <Input
                    name="surname"
                    value={profileData.surname}
                    onChange={onInputChange}
                    placeholder={t("фамилия")}
                    className="mb-1"
                />
                <Input
                    name="email"
                    value={profileData.email}
                    onChange={onInputChange}
                    placeholder={t("email")}
                    className="mb-1"
                />
                <Input
                    name="phone"
                    value={profileData.phone}
                    onChange={onInputChange}
                    placeholder={t("телефон")}
                    className="mb-1"
                />
                <Select
                    value={profileData.country}
                    options={countryOptions}
                    onChange={onSelectChange}
                    label={t("страна")}
                    className="mb-1"
                />

                <div className="centered g-1 mt-2">
                    <Button
                        type="submit"
                        bordered
                        feature={ButtonFeature.BLANK}
                    >
                        {t("сохранить")}
                    </Button>
                    <Button bordered feature={ButtonFeature.BLANK} onClick={closeHandler}>{t("отмена")}</Button>
                </div>
            </form>
        </Modal>
    )
})
