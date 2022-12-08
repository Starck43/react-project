import {FC, SVGProps} from "react"
import {AlignType} from "@/shared/types/ui"


export interface NavbarItemType {
    id: string
    text?: string
    Icon?: FC<SVGProps<SVGSVGElement>>
    authOnly?: boolean
    path: string
    group: AlignType
}
