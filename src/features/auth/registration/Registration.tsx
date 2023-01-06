import { useState } from "react"
import { useTranslation } from "react-i18next"

import { User } from "@/entities/user"

import { Button, ButtonFeature } from "@/shared/ui/button"
import { Card } from "@/shared/ui/card"
import { Input } from "@/shared/ui/input"

import cls from "./Registration.module.sass"

export const Registration = () => {
    const [userData, setUserData] = useState<User>({
        id: "",
        username: "",
        password: "",
    })
    const { t } = useTranslation("auth")

    return (
        <Card className={cls.registration}>
            <Input
                name="name"
                value={userData.username}
                onChange={(val) => setUserData({ ...userData, username: val })}
                className="mb-2"
            />
            <Input
                name="password"
                value={userData.password}
                onChange={(val) => setUserData({ ...userData, password: val })}
                className="mb-2"
            />
            <Button feature={ButtonFeature.BLANK}>{t("регистрация")}</Button>
        </Card>
    )
}
