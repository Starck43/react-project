import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {AUTH_USER_KEY} from "@/shared/const/localStorage"

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(AUTH_USER_KEY) || ""
            if (token) {
                headers.set("Authorization", token)
            }
            return headers
        },
    }),
    endpoints: () => ({}),
})
