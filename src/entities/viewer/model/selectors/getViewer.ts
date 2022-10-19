import {StateSchema} from "app/providers/store-provider"
import {UserSchema} from "entities/user"

export const getViewer = (state: StateSchema):UserSchema => state.user
