import axios from "axios"
import {AUTH_USER_KEY} from "@/shared/const/localStorage"


export const $api = axios.create({
    baseURL: __API__,
})

    // just only for json-server
$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(AUTH_USER_KEY) || ""
        // config.headers.AccessControlAllowOrigin = "*"
        // config.withCredentials = false
    }
    return config
})
