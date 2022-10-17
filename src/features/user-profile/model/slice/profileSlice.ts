import {createSlice} from "@reduxjs/toolkit"

import {ProfileSchema} from "features/user-profile"
import {updateUserDetails} from "../services/updateUserDetails"


const initialState: ProfileSchema = {
    userAuth: {username: "", password: ""},
    userDetails: {email: ""},
    error: "",
    isLoading: false,
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(updateUserDetails.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        .addCase(updateUserDetails.fulfilled, (state) => {
            state.isLoading = false
        })
        .addCase(updateUserDetails.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

// Action creators are generated for each case reducer function
export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice
