import {Flex, FlexProps} from "../flex/Flex"


type RowProps = Omit<FlexProps, "direction">

const Row = (props: RowProps) => {
    const {align = "start"} = props
    return <Flex {...props} align={align} direction="row" />
}

export default Row
