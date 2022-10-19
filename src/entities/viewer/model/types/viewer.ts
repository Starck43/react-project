import {Country} from "shared/const/common"

export interface Viewer {
    id?: string
    email: string
    name?: string
    surname?: string
    phone?: string
    country?: Country
}

export interface ViewerSchema {
    data?: Viewer
    isLoading: boolean
    error?: string
    readonly: boolean
}
