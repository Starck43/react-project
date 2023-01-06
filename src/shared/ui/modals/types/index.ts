import { CSSProperties, ReactNode } from "react"
import { PositionType, SizeType } from "@/shared/types/ui"

export interface DrawerProps {
    open: boolean
    onClose?: () => void
    lazy?: boolean
    header?: ReactNode
    closeOnOverlayClick?: boolean
    animationTime?: number
    showClose?: boolean
    position?: PositionType
    fullSize?: boolean
    rounded?: boolean
    bordered?: boolean
    portalRoot?: HTMLElement
    className?: string
    style?: CSSProperties
    children: ReactNode
}

export interface ModalProps extends DrawerProps {
    onSubmit?: () => void
    footer?: ReactNode
    secondaryBtnLabel?: string | null
    primaryBtnLabel?: string | null
    size?: SizeType
    fullWidth?: boolean
}
