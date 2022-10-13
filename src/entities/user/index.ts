export type {
UserSchema, AuthUser, User, UserProps,
} from "./model/types/user"

export {userReducer, userActions} from "./model/slice/userSlice"
export {getAuthUser} from "./model/selectors/getAuthUser"
