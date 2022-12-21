import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {AUTH_USER_KEY} from "@/shared/const/localStorage"
import {User, UserSchema} from "../types/user"


const initialState: UserSchema = {_mounted: false, authData: {}}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:
        {
            setAuthData: (state, action: PayloadAction<User>) => {
                localStorage.setItem(AUTH_USER_KEY, JSON.stringify(action.payload))
                state.authData = action.payload
            },
            initAuthData: (state) => {
                const user = localStorage.getItem(AUTH_USER_KEY)
                if (user) {
                    state.authData = JSON.parse(user)
                }
                state._mounted = true
            },
            resetAuthData: (state) => {
                state.authData = {}
                localStorage.removeItem(AUTH_USER_KEY)
            },
        },
})

// Action creators are generated for each case reducer function
export const {actions: userActions} = userSlice
export const {reducer: userReducer} = userSlice
