import {UserSchema} from "entities/user"

export interface ProfileSchema extends UserSchema{
    isLoading: boolean
    error?: string
}
