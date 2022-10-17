export interface User {
    id?: string
    email: string
    name?: string
    surname?: string
    phone?: string
}

export interface AuthUser {
    id?: string
    username: string
    password: string
}

export interface UserSchema {
    userAuth?: AuthUser
    userDetails?: User
}

export interface UserProps extends UserSchema{
    className?: string
    show?: boolean
    closeHandler?: () => void
}
