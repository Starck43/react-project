import {createSlice, PayloadAction} from "@reduxjs/toolkit"

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
    reducers:
        {
            updateProfileData: (state, action: PayloadAction<Viewer>) => {
                state.data = action.payload
            },
        },
})

// Action creators are generated for each case reducer function
export const {actions: viewerActions} = viewerSlice
export const {reducer: viewerReducer} = viewerSlice
