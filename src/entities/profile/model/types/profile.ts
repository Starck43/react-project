import {Country} from "entities/country/model/types/country"

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

export interface ProfileSchema {
    data?: Profile
    isLoading: boolean
    error?: string
    readonly?: boolean
}
