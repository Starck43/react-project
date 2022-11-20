import {Profile, ValidateProfileError} from "entities/profile"


export interface ProfileSchema {
    data?: Profile
    copy?: Profile
    isLoading: boolean
    error?: string
    readonly?: boolean
    validateErrors?: ValidateProfileError[]
}
