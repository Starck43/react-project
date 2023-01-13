import { createAsyncThunk } from "@reduxjs/toolkit"

import { ThunkConfig } from "@/app/providers/store-provider"

import type { Profile } from "../types/profile"
import { ValidateProfileError } from "../consts"

import { getProfileForm } from "../selectors/getProfile"
import { validateProfileData } from "./validateProfileData"

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    "profile/updateProfileData",
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI
        // if needed to dispatch unsaved data to store and then send it on server
        // dispatch(profileActions.update(data))
        const form = getProfileForm(getState())
        const errors = validateProfileData(form) // validate before sending updated data on server

        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${form?.id}`, form)
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    },
)
