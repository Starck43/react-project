import {createSlice} from "@reduxjs/toolkit"

import {ProfileSchema} from "entities/profile"

import {updateProfileData} from "../services/updateProfileData"


const initialState: ProfileSchema = {
    isLoading: false,
    error: undefined,
    copy: undefined,
}

export const updateProfileSlice = createSlice({
    name: "update",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(updateProfileData.pending, (state) => {
            state.isLoading = true
            state.validateErrors = undefined
        })
        .addCase(updateProfileData.fulfilled, (state) => {
            state.isLoading = false
            state.data = state.copy
            // state.copy = undefined
            state.validateErrors = undefined
        })
        .addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false
            state.validateErrors = action.payload
        })
    },
})

// Action creators are generated for each case reducer function
export const {actions: updateProfileActions} = updateProfileSlice
export const {reducer: updateProfileReducer} = updateProfileSlice
