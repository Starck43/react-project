import {UserRole} from "../consts"


export interface User {
    id?: string
    username?: string
    password?: string
    avatar?: string
    roles?: UserRole[]
}

export interface UserSchema {
    authData?: User
    _mounted: boolean
}
