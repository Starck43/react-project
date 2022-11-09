export interface User {
    id?: string
    username: string
    password?: string
    avatar?: string
}

export interface UserSchema {
    authData: User
    readonly?: boolean
    _mounted: boolean
}
/*

export interface UserProps {
    authData?: User
    className?: string
    show?: boolean
    closeHandler?: () => void
}
*/
