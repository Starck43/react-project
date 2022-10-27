import axios from "axios"
import {AUTH_USER_KEY} from "shared/const/localStorage"


export const $api = axios.create({
    baseURL: __API__,
    headers: {authorization: localStorage.getItem(AUTH_USER_KEY) || ""}, // just only for json-server
})
