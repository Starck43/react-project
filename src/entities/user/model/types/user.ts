export interface User {
    email?: string
    name?: string
    surname?: string
    phone?: string
}

export interface AuthUser {
    id: string
    username: string
    password: string
}

export interface UserSchema extends User {
    authData?: AuthUser
}

export interface UserProps {
    user: AuthUser
    data?: User
    className?: string
}


export interface AuthProps {
    user?: AuthUser
    show: boolean
    handler?: () => void
}
