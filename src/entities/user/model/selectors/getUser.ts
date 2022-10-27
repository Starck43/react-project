import {StateSchema} from "app/providers/store-provider"
import {UserSchema} from "../types/user"

export const getUser = (state: StateSchema):UserSchema => state.user
