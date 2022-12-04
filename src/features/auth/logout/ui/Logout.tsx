import {useTranslation} from "react-i18next"
import {useDispatch, useSelector} from "react-redux"

import {getUser, userActions} from "entities/user"
import {ButtonFeature} from "shared/ui/button/consts"

import {Modal} from "shared/ui/modal/Modal"
import {Button} from "shared/ui/button/Button"
import {Row} from "shared/ui/stack"

import cls from "./Logout.module.sass"


export interface LogoutProps {
    show?: boolean
    closeHandler: () => void
}

export const Logout = ({show, closeHandler}: LogoutProps) => {
    const {t} = useTranslation("auth")
    const dispatch = useDispatch()
    const {username} = useSelector(getUser)
    const logoutClick = () => {
        dispatch(userActions.resetAuthData())
        closeHandler?.()
    }

    return (
        <Modal open={show} onClose={closeHandler} className="modal-sm">
            <p className={cls.text}>{t("выйти из аккаунта?", {username})}</p>

            <Row align="center" gap="sm" className="mt-2">
                <Button feature={ButtonFeature.BLANK} bordered onClick={logoutClick}>{t("да")}</Button>
                <Button feature={ButtonFeature.BLANK} bordered onClick={closeHandler}>{t("нет")}</Button>
            </Row>
        </Modal>
    )
}
