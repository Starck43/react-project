import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {fetchProfileData} from "../services/fetchProfileData"

import {Viewer, ViewerSchema} from "../types/viewer"


const initialState: ViewerSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
}

export const viewerSlice = createSlice({
    name: "viewer",
    initialState,
    reducers: {
        updateProfileData: (state, action: PayloadAction<Viewer>) => {
            state.data = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Viewer>) => {
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
export const {actions: viewerActions} = viewerSlice
export const {reducer: viewerReducer} = viewerSlice
