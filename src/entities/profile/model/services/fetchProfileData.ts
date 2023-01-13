import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "@/app/providers/store-provider"

import { Profile } from "../types/profile"

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async (profileId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`)

            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
            return rejectWithValue("error")
        }
    },
)
