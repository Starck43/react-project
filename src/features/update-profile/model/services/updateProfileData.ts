import {createAsyncThunk} from "@reduxjs/toolkit"

import {ThunkConfig} from "@/app/providers/store-provider"
import {Profile, fetchProfileData, getProfileCopy, profileActions} from "@/entities/profile"
import {ValidateProfileError} from "@/entities/profile/model/consts"

import {validateProfileData} from "./validateProfileData"


export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    "profile/updateProfileData",
    async (_, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, getState} = thunkAPI
        // if needed to dispatch unsaved data to store and then get them for sending to server
        // dispatch(profileActions.update(data))
        const modifiedData = getProfileCopy(getState())
        const errors = validateProfileData(modifiedData) // validate before sending updated data on server

        if (errors.length) {
            dispatch(profileActions.setErrors(errors))
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${modifiedData?.id}`, modifiedData)
            if (!response.data) {
                throw new Error()
            }

            dispatch(fetchProfileData(modifiedData?.id))
            return response.data
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
            return rejectWithValue([ ValidateProfileError.SERVER_ERROR ])
        }
    },
)
