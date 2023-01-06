import { Button, ButtonFeature, ButtonSize } from "@/shared/ui/button"
import { Flex } from "@/shared/ui/stack"

import { useCounterValue } from "../model/selectors/getCounterValue"
import { useCounterActions } from "../model/slice/counterSlice"

export const Counter = () => {
    const counterValue = useCounterValue()
    const { increment, decrement, incrementByAmount } = useCounterActions()

    const incClick = () => increment()
    const decClick = () => decrement()
    const incByAmountClick = () => incrementByAmount(10)

    return (
        <Flex justify="center" fullWidth>
            <Button
                data-testid="counterIncrement"
                variant="primary"
                feature={ButtonFeature.CLEAR}
                size={ButtonSize.LARGE}
                squared
                bordered
                onClick={decClick}
            >
                -
            </Button>
            <Button
                data-testid="counter-value"
                variant="primary"
                size={ButtonSize.LARGE}
                squared
                onClick={incByAmountClick}
            >
                {counterValue}
            </Button>
            <Button
                data-testid="counterIncrement"
                variant="primary"
                feature={ButtonFeature.CLEAR}
                size={ButtonSize.LARGE}
                squared
                bordered
                onClick={incClick}
            >
                +
            </Button>
        </Flex>
    )
}
