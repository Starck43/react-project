import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

import {userActions} from "entities/user"
import {User} from "entities/user/model/types/user"


export const updateUserDetails = createAsyncThunk<User, User, {rejectValue: string}>(
    "user/updateUserDetails",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(`http://localhost:8000/${data.id}/update`, data)

            if (!response.data) {
                throw new Error()
            }
            const res = response.data
            thunkAPI.dispatch(userActions.updateProfileData(res))
            return res
        } catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue("error")
        }
    },
)
