import {createAsyncThunk} from "@reduxjs/toolkit"
import {ThunkConfig} from "app/providers/store-provider/config/stateSchema"

import {AuthUser, userActions} from "entities/user"


interface LoginUser {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<AuthUser, LoginUser, ThunkConfig<string>>(
    "login/loginByUsername",
    async (data, thunkAPI) => {
        const {extra, dispatch, rejectWithValue} = thunkAPI
        try {
            const response = await extra.api.post<AuthUser>("/login", data)

            if (!response.data) {
                throw new Error()
            }
            const res = response.data
            dispatch(userActions.setAuthData(res))

            return res
        } catch (e) {
            console.log(e)
            return rejectWithValue("error")
        }
    },
)
