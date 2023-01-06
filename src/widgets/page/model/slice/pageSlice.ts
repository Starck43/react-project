import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { PageSchema } from "../types/pageSchema"

const initialState: PageSchema = {
    scroll: {},
}

export const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        setScrollPos: (
            state,
            { payload }: PayloadAction<{ path: string; pos: number }>,
        ) => {
            state.scroll[payload.path] = payload.pos
        },
    },
})

export const { actions: pageActions } = pageSlice
export const { reducer: pageReducer } = pageSlice
