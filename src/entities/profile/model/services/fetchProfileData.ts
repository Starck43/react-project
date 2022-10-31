import {createAsyncThunk} from "@reduxjs/toolkit"
import {ThunkConfig} from "app/providers/store-provider"
import {Profile} from "entities/profile"


export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI

        try {
            const response = await extra.api.get<Profile>("/profile")

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