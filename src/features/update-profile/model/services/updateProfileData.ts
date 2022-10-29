import {createAsyncThunk} from "@reduxjs/toolkit"

import {ThunkConfig} from "app/providers/store-provider"
import {Profile, validateProfileData} from "entities/profile"
import {ValidateProfileError} from "entities/profile/model/types/profile"


export const updateProfileData = createAsyncThunk<Profile, Profile, ThunkConfig<ValidateProfileError[]>>(
    "profile/updateProfileData",
    async (data, thunkAPI) => {
        const {extra, rejectWithValue, dispatch, getState} = thunkAPI
        // if needed to dispatch unsaved data to store and then get them for sending to server
        // dispatch(profileActions.updateProfileData(data))
        // const data = getProfileData(getState())
        const errors = validateProfileData(data)
        if (errors.length) return rejectWithValue(errors)

        try {
            const response = await extra.api.put<Profile>("/profile", data)
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue([ ValidateProfileError.SERVER_ERROR ])
        }
    },
)
