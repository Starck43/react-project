import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ProfileSchema} from "entities/profile/model/types/profileSchema"

import {updateProfileData} from "features/update-profile"

import {fetchProfileData} from "../services/fetchProfileData"

import {Profile} from "../types/profile"


const initialState: ProfileSchema = {
    isLoading: false,
    error: undefined,
    copy: undefined,
}

// TODO: Remove it to feature Profile update
export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        update: (state, action: PayloadAction<Profile>) => {
            state.copy = {...state.copy, ...action.payload}
        },
        revert: (state) => {
            state.copy = state.data
            state.validateErrors = undefined
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false
            state.copy = action.payload
            state.data = action.payload
        })
        .addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        .addCase(updateProfileData.pending, (state) => {
            state.isLoading = true
            state.validateErrors = undefined
        })
        .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
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
export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice
