import {memo, useCallback, useEffect} from "react"
import {useDispatch, useSelector, useStore} from "react-redux"
import {useTranslation} from "react-i18next"

import {ReduxStoreWithManager} from "app/providers/store-provider"
import i18n from "shared/config/i18n/i18n"
import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {classnames} from "shared/lib/helpers/classnames"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Info, InfoStatus} from "shared/ui/info/Info"
import Input from "shared/ui/input/Input"

import {getLoginUsername} from "../model/selectors/getLoginUsername"
import {getLoginPassword} from "../model/selectors/getLoginPassword"
import {getLoginLoading} from "../model/selectors/getLoginLoading"
import {getLoginError} from "../model/selectors/getLoginError"
import {loginActions, loginReducer} from "../model/slice/loginSlice"
import {loginByUsername} from "../model/services/loginByUsername"

import cls from "./LoginForm.module.sass"


export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducerList = {login: loginReducer}

const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation("auth")

    const dispatch = useDispatch()
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

    const loginClick = useCallback(() => {
        // async post request to server for verifying login data and then dispatching success result
        dispatch(loginByUsername({username, password}))
    }, [ dispatch, password, username ])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div
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
})

export default LoginForm
