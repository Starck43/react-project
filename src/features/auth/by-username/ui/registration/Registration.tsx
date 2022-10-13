import {useState} from "react"
import {useTranslation} from "react-i18next"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import Input from "shared/ui/input/Input"
import {classnames} from "shared/lib/helpers/classnames"
import {AuthUser} from "entities/user"

import cls from "./Registration.module.sass"


export const Registration = () => {
    const [ userData, setUserData ] = useState<AuthUser>({
        id: "", username: "", password: "",
    })
    const {t} = useTranslation("auth")

    return (
        <div className={classnames(cls, [ "registration" ], {}, [ "centered" ])}>
            <Input
                name="name"
                value={userData.username}
                onChange={(val) => setUserData({...userData, username: val})}
                className="mb-2"
            />
            <Input
                name="password"
                value={userData.password}
                onChange={(val) => setUserData({...userData, password: val})}
                className="mb-2"
            />
            <Button feature={ButtonFeature.BLANK}>{t("регистрация")}</Button>
        </div>
    )
}
