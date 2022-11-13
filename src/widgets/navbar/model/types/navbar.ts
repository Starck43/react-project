import {SVGProps, VFC} from "react"

export type NavGroupType = "left" | "center" | "right"

export interface NavbarItemType {
    id: string
    text?: string
    Icon?: VFC<SVGProps<SVGSVGElement>>
    authOnly?: boolean
    path: string
    group: NavGroupType
}
