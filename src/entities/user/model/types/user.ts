export enum UserRole {
    ADMIN = "ADMIN",
    EDITOR = "EDITOR",
    GUEST = "GUEST",
}

export interface User {
    id?: string
    username: string
    password?: string
    avatar?: string
    roles?: UserRole[]
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
