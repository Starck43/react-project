import type { Country } from "@/entities/country"

import { ValidateProfileError } from "../consts"

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
    copy?: Profile
    isLoading: boolean
    error?: string
    validateErrors?: ValidateProfileError[]
}
