import {memo, useCallback} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import i18n from "shared/config/i18n/i18n"
import {classnames} from "shared/lib/helpers/classnames"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Info, InfoStatus} from "shared/ui/info/Info"
import Input from "shared/ui/input/Input"

import {getLoginState} from "features/auth/by-username/model/selectors/getLoginState"
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername"
import {loginActions} from "../../model/slice/loginSlice"

import cls from "./Login.module.sass"


export const Login = memo(() => {
    const {t} = useTranslation("auth")
    const {username, password, error, isLoading} = useSelector(getLoginState)
    const dispatch = useDispatch()

    const changeUsername = useCallback((val: string) => {
        dispatch(loginActions.setUsername(val))
    }, [ dispatch ])

    const changePassword = useCallback((val: string) => {
        dispatch(loginActions.setPassword(val))
    }, [ dispatch ])

    const loginHandler = useCallback(() => {
        dispatch(loginByUsername({username, password}))
    }, [ dispatch, password, username ])

    return (
        <div className={classnames(cls, [ "login" ], {}, [ "centered", "vertical" ])}>
            <Input
                name="name"
                type="text"
                value={username}
                onChange={changeUsername}
                className="mb-1"
            />
            <Input
                name="password"
                type="password"
                value={password}
                onChange={changePassword}
                className="mb-1"
            />

            {error && (
            <Info
                className="mb-1"
                status={InfoStatus.ERROR}
            >
                {i18n.t("неверный пароль или логин", {ns: "auth"})}
            </Info>
            )}

            <div className={cls.controls}>
                <Button
                    feature={ButtonFeature.BLANK}
                    bordered
                    disabled={isLoading}
                    onClick={loginHandler}
                    className="mt-1 w-100"
                >
                    {t("войти")}
                </Button>
            </div>
        </div>
    )
})
