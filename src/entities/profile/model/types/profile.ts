import {Country} from "entities/country/model/types/country"


export enum ValidateProfileError {
    INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
    INCORRECT_EMAIL = "INCORRECT_EMAIL",
    INCORRECT_PHONE = "INCORRECT_PHONE",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR"
}

export interface Profile {
    id?: string
    username?: string
    email?: string
    name?: string
    surname?: string
    phone?: string
    country?: Country
    avatar?: string
}
