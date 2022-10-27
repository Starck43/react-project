import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {fetchProfileData, Profile, ProfileSchema} from "entities/profile"



const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
}

export const updateProfileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateProfileData: (state, action: PayloadAction<Profile>) => {
            state.data = action.payload
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
            state.data = action.payload
        })
        .addCase(fetchProfileData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

// Action creators are generated for each case reducer function
export const {actions: profileActions} = updateProfileSlice
export const {reducer: profileReducer} = updateProfileSlice
