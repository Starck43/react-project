export interface User {
    id?: string
    username: string
    password: string
}

export interface UserSchema {
    authData?: User
    readonly?: boolean
}

export interface UserProps {
    authData?: User
    className?: string
    show?: boolean
    closeHandler?: () => void
}
