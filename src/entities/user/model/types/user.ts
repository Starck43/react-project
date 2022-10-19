import {Country} from "shared/const/common"


export interface User {
    id?: string
    email: string
    name?: string
    surname?: string
    phone?: string
    country?: Country
}

export interface AuthUser {
    id?: string
    username: string
    password: string
}

export interface UserSchema {
    userAuth?: AuthUser
    userDetails?: User
    readonly?: boolean
}

export interface ProfileSchema {
    userAuth?: AuthUser
    userDetails?: User
    isLoading: boolean
    error?: string
    readonly: boolean
}

export interface UserProps extends UserSchema{
    className?: string
    show?: boolean
    closeHandler?: () => void
}
