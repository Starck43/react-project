import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import {fetchProfileData} from "../services/fetchProfileData"

import {Profile, ProfileSchema} from "../types/profile"


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
        updateCopy: (state, action: PayloadAction<Profile>) => {
            state.copy = {...state.copy, ...action.payload}
        },
        updateData: (state, action: PayloadAction<Profile>) => {
            state.data = action.payload
        },
        revert: (state) => {
            state.copy = state.data
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
    },
})

// Action creators are generated for each case reducer function
export const {actions: profileActions} = profileSlice
export const {reducer: profileReducer} = profileSlice
