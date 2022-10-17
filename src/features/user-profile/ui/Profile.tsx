import {FormEvent, useState} from "react"
import {useDispatch} from "react-redux"
import {useTranslation} from "react-i18next"

import {loginActions} from "features/auth/by-username/model/slice/loginSlice"

import {Button, ButtonFeature} from "shared/ui/button/Button"
import Input from "shared/ui/input/Input"
import {Modal} from "shared/ui/modal/Modal"

import {userActions, UserProps} from "entities/user"

// import cls from "./Profile.module.sass"


export const Profile = ({userAuth, userDetails, show, closeHandler}: UserProps) => {
    const [ userProfile, setUserProfile ] = useState({userAuth, userDetails})
    const dispatch = useDispatch()
    const {t} = useTranslation("auth")

    const updateProfileClick = (e: FormEvent) => {
        e.preventDefault()
        dispatch(loginActions.setUsername(userProfile.userAuth.username))
        dispatch(loginActions.setPassword(userProfile.userAuth.password))
        dispatch(userActions.updateProfileData(userProfile.userDetails))
        closeHandler()
    }

    return (
        <Modal
            header={<h4>{t("изменение профиля")}</h4>}
            open={show}
            onClose={closeHandler}
            className="sm-modal"
        >
            <form onSubmit={(e) => updateProfileClick(e)}>
                <Input
                    name="username"
                    value={userProfile.userAuth.username}
                    onChange={(val) => setUserProfile({...userProfile, userAuth: {...userAuth, username: val}})}
                    placeholder={t("имя")}
                    className="mb-1"
                />
                <Input
                    name="password"
                    type="password"
                    value={userProfile.userAuth.password}
                    onChange={(val) => setUserProfile({...userProfile, userAuth: {...userAuth, password: val}})}
                    placeholder={t("пароль")}
                    className="mb-1"
                />
                <Input
                    name="name"
                    value={userProfile.userDetails?.name}
                    onChange={(val) => setUserProfile({...userProfile, userDetails: {...userDetails, name: val}})}
                    placeholder={t("имя")}
                    className="mb-1"
                />
                <Input
                    name="surname"
                    value={userProfile.userDetails?.surname}
                    placeholder={t("фамилия")}
                    className="mb-1"
                />
                <Input
                    name="email"
                    value={userProfile.userDetails?.email}
                    placeholder={t("email")}
                    className="mb-1"
                />
                <Input
                    name="phone"
                    value={userProfile.userDetails?.phone}
                    placeholder={t("телефон")}
                    className="mb-1"
                />
                <div className="centered g-1 mt-2">
                    <Button
                        type="submit"
                        bordered
                        feature={ButtonFeature.BLANK}
                        onSubmit={(e) => updateProfileClick(e)}
                    >
                        {t("сохранить")}
                    </Button>
                    <Button bordered feature={ButtonFeature.BLANK} onClick={closeHandler}>{t("отмена")}</Button>
                </div>
            </form>
        </Modal>
    )
}
