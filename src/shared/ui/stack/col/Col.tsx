import {Flex, FlexProps} from "shared/ui/stack/flex/Flex"


type ColProps = Omit<FlexProps, "direction">

const Col = (props: ColProps) => {
    const {align = "start"} = props
    return <Flex {...props} align={align} direction="column" />
}

export default Col
