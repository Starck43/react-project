export type { User, UserSchema } from "./model/types/user"
export { UserRole } from "./model/consts"

export { getUser, getUserOnMount } from "./model/selectors/getUser"
export {
    getUserRoles,
    isUserAdmin,
    isUserEditor,
} from "./model/selectors/getUserRoles"
export { userReducer, userActions } from "./model/slice/userSlice"
