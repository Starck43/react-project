import {useTranslation} from "react-i18next"
import {useDispatch} from "react-redux"

import {Modal} from "shared/ui/modal/Modal"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {userActions} from "entities/user"

import cls from "./Logout.module.sass"

export interface LogoutProps {
    username?: string
    show?: boolean
    closeHandler?: () => void
}

export const Logout = ({username, show, closeHandler}: LogoutProps) => {
    const dispatch = useDispatch()
    const {t} = useTranslation("auth")

    const logoutClick = () => {
        dispatch(userActions.resetAuthData())
        closeHandler?.()
    }

    return (
        <Modal open={show} onClose={closeHandler} className="sm-modal">
            <p className={cls.text}>{t("выйти из аккаунта?", {username})}</p>

            <div className="g-1 centered mt-2">
                <Button feature={ButtonFeature.BLANK} bordered onClick={logoutClick}>{t("да")}</Button>
                <Button feature={ButtonFeature.BLANK} bordered onClick={closeHandler}>{t("нет")}</Button>
            </div>
        </Modal>
    )
}
