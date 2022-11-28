import {SVGProps, VFC} from "react"
import {AlignType} from "shared/types/ui"


export interface NavbarItemType {
    id: string
    text?: string
    Icon?: VFC<SVGProps<SVGSVGElement>>
    authOnly?: boolean
    path: string
    group: AlignType
}
