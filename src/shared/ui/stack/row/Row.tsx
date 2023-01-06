import { memo, ComponentProps, ElementType } from "react"
import { Flex, FlexProps } from "../flex/Flex"

type RowProps<E extends ElementType> = Omit<FlexProps<E>, "direction"> &
    Omit<ComponentProps<E>, keyof FlexProps>

const Row = <E extends ElementType = keyof HTMLElementTagNameMap>(
    props: RowProps<E>,
) => {
    const { align = "start" } = props
    return <Flex {...props} align={align} direction="row" />
}

export default memo(Row)
