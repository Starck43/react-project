import {createAsyncThunk} from "@reduxjs/toolkit"
import {ThunkConfig} from "app/providers/store-provider/config/stateSchema"

import {User, userActions} from "entities/user"
import {AppRoutes, RoutesPath} from "shared/config/router"


interface LoginUser {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginUser, ThunkConfig<string>>(
    "login/loginByUsername",
    async (data, thunkAPI) => {
        const {extra, dispatch, rejectWithValue} = thunkAPI
        try {
            const response = await extra.api.post<User>("/login", data)

            if (!response.data) {
                throw new Error()
            }
            const res = response.data
            dispatch(userActions.setAuthData(res))
            extra.navigate?.(RoutesPath[AppRoutes.PROFILE])
            return res
        } catch (e) {
            console.log(e)
            return rejectWithValue("error")
        }
    },
)
