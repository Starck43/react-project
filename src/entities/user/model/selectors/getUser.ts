import {StateSchema} from "app/providers/store-provider"
import {UserSchema} from "entities/user"

export const getUser = (state: StateSchema):UserSchema => state.user
