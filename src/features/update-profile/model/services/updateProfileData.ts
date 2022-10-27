import {createAsyncThunk} from "@reduxjs/toolkit"

import {ThunkConfig} from "app/providers/store-provider"
import {Profile} from "entities/profile"


export const updateProfileData = createAsyncThunk<Profile, Profile, ThunkConfig<string>>(
    "profile/updateProfileData",
    async (data, thunkAPI) => {
        const {extra, rejectWithValue, dispatch, getState} = thunkAPI
        try {
            // if needed to dispatch unsaved data to store and then get them for sending to server
            // dispatch(profileActions.updateProfileData(data))
            // const data = getProfileData(getState())
            const response = await extra.api.put<Profile>("/profile", data)

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
