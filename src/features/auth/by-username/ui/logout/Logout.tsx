import {useTranslation} from "react-i18next"
import {useDispatch} from "react-redux"

import {Modal} from "shared/ui/modal/Modal"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {AuthProps} from "entities/user/model/types/user"
import {userActions} from "entities/user"


import cls from "./Logout.module.sass"


export const Logout = ({user, show, handler}: AuthProps) => {
    const dispatch = useDispatch()
    const {t} = useTranslation("auth")

    const logoutHandler = () => {
        dispatch(userActions.resetAuthData())
        handler()
    }

    return (
        <Modal open={show} onClose={handler}>
            <p className={cls.text}>{t("выйти из аккаунта?", {user})}</p>

            <div className="g-1 centered mt-2">
                <Button feature={ButtonFeature.BLANK} bordered onClick={logoutHandler}>{t("да")}</Button>
                <Button feature={ButtonFeature.BLANK} bordered>{t("нет")}</Button>
            </div>
        </Modal>
    )
}
