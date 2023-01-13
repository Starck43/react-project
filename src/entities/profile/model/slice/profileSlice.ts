import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { Profile, ProfileSchema } from "../types/profile"
import { updateProfileData } from "../services/updateProfileData"
import { fetchProfileData } from "../services/fetchProfileData"

const initialState: ProfileSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    validateErrors: undefined,
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateFormState: (state, action: PayloadAction<Profile>) => {
            state.form = { ...state.form, ...action.payload }
        },
        revertFormState: (state) => {
            state.form = state.data
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
                state.form = action.payload
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
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
                state.validateErrors = undefined
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.validateErrors = action.payload
            })
    },
})

// Action creators are generated for each case reducer function
export const { actions: profileActions, reducer: profileReducer } = profileSlice
