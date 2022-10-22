import {memo, useCallback} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import i18n from "shared/config/i18n/i18n"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import Input from "shared/ui/input/Input"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Info, InfoStatus} from "shared/ui/info/Info"
import {classnames} from "shared/lib/helpers/classnames"

import {getLoginUsername} from "../model/selectors/getLoginUsername"
import {getLoginPassword} from "../model/selectors/getLoginPassword"
import {getLoginLoading} from "../model/selectors/getLoginLoading"
import {getLoginError} from "../model/selectors/getLoginError"
import {loginByUsername} from "../model/services/loginByUsername"
import {loginActions, loginReducer} from "../model/slice/loginSlice"

import cls from "./LoginForm.module.sass"


export interface LoginFormProps {
    className?: string
    onSuccess?: ()=> void
}

const initialReducers: ReducerList = {login: loginReducer}

const LoginForm = ({className, onSuccess}: LoginFormProps) => {
    const {t} = useTranslation("auth")

    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginLoading)


    const changeUsername = useCallback((val: string) => {
        dispatch(loginActions.setUsername(val))
    }, [ dispatch ])

    const changePassword = useCallback((val: string) => {
        dispatch(loginActions.setPassword(val))
    }, [ dispatch ])

    const loginClick = useCallback(async () => {
        // async post request to server for verifying login data and then dispatching success result
        const res = await dispatch(loginByUsername({username, password}))
        if (res.meta.requestStatus === "fulfilled") {
            onSuccess?.()
        }
    }, [ onSuccess, dispatch, password, username ])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div
                data-testid="loginForm"
                className={classnames(cls, [ "login" ], {}, [ className, "centered", "vertical" ])}
            >
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
                        onClick={loginClick}
                        className="mt-1 w-100"
                    >
                        {t("войти")}
                    </Button>
                </div>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(LoginForm)
