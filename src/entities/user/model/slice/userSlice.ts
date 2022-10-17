import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {AUTH_USER_KEY} from "shared/const/localStorage"
import {AuthUser, User, UserSchema} from "../types/user"


const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:
        {
            updateProfileData: (state, action: PayloadAction<User>) => {
                state.userDetails = action.payload
            },
            setAuthData: (state, action: PayloadAction<AuthUser>) => {
                localStorage.setItem(AUTH_USER_KEY, JSON.stringify(action.payload))
                state.userAuth = action.payload
            },
            initAuthData: (state) => {
                const user = localStorage.getItem(AUTH_USER_KEY)
                if (user) {
                    state.userAuth = JSON.parse(user)
                }
            },
            resetAuthData: (state) => {
                state.userAuth = undefined
                localStorage.removeItem(AUTH_USER_KEY)
            },
        },
})

// Action creators are generated for each case reducer function
export const {actions: userActions} = userSlice
export const {reducer: userReducer} = userSlice
