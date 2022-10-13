import {StateSchema} from "app/providers/store-provider"
import {AuthUser} from "entities/user"

export const getAuthUser = (state: StateSchema):AuthUser => state.user.authData
