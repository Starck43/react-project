import {createAsyncThunk} from "@reduxjs/toolkit"

import {ThunkConfig} from "app/providers/store-provider"
import {Profile, validateProfileData} from "entities/profile"
import {getProfileCopy} from "entities/profile/model/selectors/getProfileCopy"
import {ValidateProfileError} from "entities/profile/model/types/profile"


export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    "profile/updateProfileData",
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI
        // if needed to dispatch unsaved data to store and then get them for sending to server
        // dispatch(profileActions.update(data))
        const modifiedData = getProfileCopy(getState())
        const errors = validateProfileData(modifiedData)

        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>("/profile", modifiedData)
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
