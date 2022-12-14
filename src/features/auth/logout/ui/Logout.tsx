import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"

import { getUser, userActions } from "@/entities/user"

import { Modal } from "@/shared/ui/modals"

import cls from "./Logout.module.sass"

export interface LogoutProps {
    show: boolean
    closeHandler: () => void
}

export const Logout = ({ show, closeHandler }: LogoutProps) => {
    const { t } = useTranslation("auth")
    const dispatch = useDispatch()
    const { username } = useSelector(getUser)

    const logoutClick = () => {
        dispatch(userActions.resetAuthData())
        closeHandler?.()
    }

    return (
        <Modal
            open={show}
            onSubmit={logoutClick}
            onClose={closeHandler}
            primaryBtnLabel={t("да")}
            secondaryBtnLabel={t("нет")}
            size="sm"
            bordered
            rounded
        >
            <p className={cls.text}>{t("выйти из аккаунта?", { username })}</p>
        </Modal>
    )
}
