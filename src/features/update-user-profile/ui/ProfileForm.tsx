import {FormEvent, memo, useState} from "react"
import {useDispatch} from "react-redux"
import {useTranslation} from "react-i18next"

import Input from "shared/ui/input/Input"
import {Modal} from "shared/ui/modal/Modal"
import {Button, ButtonFeature} from "shared/ui/button/Button"

import {loginActions} from "features/auth/by-username/model/slice/loginSlice"

import {userActions} from "entities/user"
import {Viewer} from "entities/viewer"

// import cls from "./Profile.module.sass"

export interface ViewerProps {
    data: Viewer
    show: boolean
    closeHandler?: () => void
}


export const ProfileForm = memo(({data, show, closeHandler}: ViewerProps) => {
    const [ userProfile, setUserProfile ] = useState({data})
    const dispatch = useDispatch()
    const {t} = useTranslation("auth")

    const updateProfileClick = (e: FormEvent) => {
        e.preventDefault()
        if (userProfile.data?.username != null) dispatch(loginActions.setUsername(userProfile.data?.username))
        // dispatch(loginActions.setPassword(userProfile.data.password))
        dispatch(userActions.updateProfileData(userProfile.data))
        closeHandler?.()
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
                    value={userProfile.data.username}
                    onChange={(val) => setUserProfile({...userProfile, data: {...userProfile.data, username: val}})}
                    placeholder={t("имя")}
                    className="mb-1"
                />
                {
                    /*                <Input
                     name="password"
                     type="password"
                     value={userProfile.data.password}
                     onChange={(val) => setUserProfile({...userProfile, data: {...userProfile.data, password: val}})}
                     placeholder={t("пароль")}
                     className="mb-1"
                     />
                     */
                }
                <Input
                    name="name"
                    value={userProfile.data.name}
                    onChange={(val) => setUserProfile({...userProfile, data: {...userProfile.data, name: val}})}
                    placeholder={t("имя")}
                    className="mb-1"
                />
                <Input
                    name="surname"
                    value={userProfile.data.surname}
                    placeholder={t("фамилия")}
                    className="mb-1"
                />
                <Input
                    name="email"
                    value={userProfile.data.email}
                    placeholder={t("email")}
                    className="mb-1"
                />
                <Input
                    name="phone"
                    value={userProfile.data.phone}
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
})
