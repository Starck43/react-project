import {createAsyncThunk} from "@reduxjs/toolkit"
import {ThunkConfig} from "app/providers/store-provider"
import {Viewer} from "entities/viewer"


export const fetchProfileData = createAsyncThunk<Viewer, void, ThunkConfig<string>>(
    "viewer/fetchProfileData",
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI
        try {
            const response = await extra.api?.get<Viewer>("/profile")

            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue("error")
        }
    },
)
