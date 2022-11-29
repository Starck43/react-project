import {Profile, ValidateProfileError} from "./profile"


export interface ProfileSchema {
    data?: Profile
    copy?: Profile
    isLoading: boolean
    error?: string
    readonly?: boolean
    validateErrors?: ValidateProfileError[]
}
