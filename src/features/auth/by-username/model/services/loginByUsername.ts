import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

import {AuthUser, userActions} from "entities/user"


interface LoginUser {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<AuthUser, LoginUser, {rejectValue: string}>(
    "login/loginByUsername",
    async (data, thunkAPI) => {
        try {
            console.log(data)
            const response = await axios.post("http://localhost:8000/login", data)

            if (!response.data) {
                throw new Error()
            }
            const res = response.data
            thunkAPI.dispatch(userActions.setAuthData(res))
            return res
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue("error")
        }
    },
)
