import { memo, ComponentProps, ElementType } from "react"
import { Flex, FlexProps } from "../flex/Flex"

type ColProps<E extends ElementType> = Omit<FlexProps<E>, "direction"> & Omit<ComponentProps<E>, keyof FlexProps>

const Col = <E extends ElementType = keyof HTMLElementTagNameMap>(props: ColProps<E>) => {
    const { align = "start" } = props
    return <Flex {...props} direction="column" align={align} />
}

export default memo(Col)
