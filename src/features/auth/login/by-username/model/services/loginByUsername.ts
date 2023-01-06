import { createAsyncThunk } from "@reduxjs/toolkit"

import { ThunkConfig } from "@/app/providers/store-provider"

import { User, userActions } from "@/entities/user"

interface LoginUser {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginUser,
    ThunkConfig<string>
>("login/loginByUsername", async (data, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI
    try {
        const response = await extra.api.post<User>("/login", data)

        if (!response.data) {
            throw new Error()
        }
        const res = response.data
        dispatch(userActions.setAuthData(res))
        return res
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
        return rejectWithValue("error")
    }
})
