import {FormEvent, useState} from "react"
import {useTranslation} from "react-i18next"

import {Button, ButtonFeature} from "shared/ui/button/Button"
import Input from "shared/ui/input/Input"
import {Modal} from "shared/ui/modal/Modal"

import {User} from "entities/user"
import {AuthProps} from "pages/auth/ui/AuthPage"

// import cls from "./Profile.module.sass"


export const Profile = ({show, handler}: AuthProps) => {
    const [ userData, setUserData ] = useState<User>()
    const {t} = useTranslation("auth")

    const saveProfile = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
    }

    return (
        <Modal
            header={<h4>{t("изменение профиля")}</h4>}
            open={show}
            onClose={handler}
            style={{maxWidth: "600px"}}
        >
            <form onSubmit={(e) => saveProfile(e)}>
                <Input
                    name="name"
                    value={userData.name}
                    placeholder={t("имя")}
                    onChange={(val) => setUserData({...userData, name: val})}
                    className="mb-1"
                />
                <Input
                    name="surname"
                    value={userData.surname}
                    placeholder={t("фамилия")}
                    onChange={(val) => setUserData({...userData, surname: val})}
                    className="mb-1"
                />
                <Input
                    name="email"
                    value={userData.email}
                    placeholder={t("email")}
                    onChange={(val) => setUserData({...userData, email: val})}
                    className="mb-1"
                />
                <Input
                    name="phone"
                    value={userData.phone}
                    placeholder={t("телефон")}
                    onChange={(val) => setUserData({...userData, phone: val})}
                    className="mb-1"
                />
                <div className="centered mt-2">
                    <Button type="submit" feature={ButtonFeature.BLANK} onSubmit={(e) => saveProfile(e)}>{t("сохранить")}</Button>
                    <Button feature={ButtonFeature.BLANK} onClick={handler}>{t("отмена")}</Button>
                </div>
            </form>
        </Modal>
    )
}
