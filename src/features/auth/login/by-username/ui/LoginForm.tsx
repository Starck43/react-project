import {memo, useCallback} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch"
import DynamicModuleLoader, {ReducerList} from "@/shared/lib/components/DynamicModuleLoader"
import {classnames} from "@/shared/lib/helpers/classnames"
import {ButtonFeature, Button} from "@/shared/ui/button"
import {Input} from "@/shared/ui/input"
import {Info, InfoStatus} from "@/shared/ui/info"
import {Col, Row} from "@/shared/ui/stack"

import {getLoginUsername} from "../model/selectors/getLoginUsername"
import {getLoginPassword} from "../model/selectors/getLoginPassword"
import {getLoginLoading} from "../model/selectors/getLoginLoading"
import {getLoginError} from "../model/selectors/getLoginError"
import {loginByUsername} from "../model/services/loginByUsername"
import {loginActions, loginReducer} from "../model/slice/loginSlice"

import cls from "./LoginForm.module.sass"


export interface LoginFormProps {
    className?: string
    onSuccess?: (res: any) => void
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
            onSuccess?.(res.payload)
        }
    }, [ onSuccess, dispatch, password, username ])

    return (
        <DynamicModuleLoader reducers={initialReducers} destroyOnUnmount>
            <Col
                data-testid="loginForm"
                align="center"
                gap="sm"
                fullWidth
                className={classnames(cls, [ "login" ], {}, [ className ])}
            >
                <Input
                    name="name"
                    type="text"
                    value={username}
                    onChange={changeUsername}
                />
                <Input
                    name="password"
                    type="password"
                    value={password}
                    onChange={changePassword}
                />

                {error && (
                    <Info
                        subTitle={t("неверный пароль или логин")}
                        status={InfoStatus.ERROR}
                    />
                )}

                <Row fullWidth align="center" className={cls.controls}>
                    <Button
                        feature={ButtonFeature.BLANK}
                        fullWidth
                        bordered
                        disabled={isLoading}
                        onClick={loginClick}
                    >
                        {t("войти")}
                    </Button>
                </Row>
            </Col>
        </DynamicModuleLoader>
    )
}

export default memo(LoginForm)
