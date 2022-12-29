import {rtkApi} from "@/shared/api/rtkApi"
import {buildAbsoluteUrl} from "@/shared/lib/helpers/urls"

import {Notification} from "../model/types/notification"


const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        notifications: build.query<Notification[], null>({
            query: () => ({
                url: buildAbsoluteUrl(__API__, "notifications"),
            }),
        }),
    }),
})

export const {useNotificationsQuery} = notificationApi
