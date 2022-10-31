import {LoginFormProps} from "features/auth/login/by-username/ui/LoginForm"
import {FC, lazy} from "react"

export const LoginFormAsync = lazy <FC<LoginFormProps>>(() => import("./LoginForm"))