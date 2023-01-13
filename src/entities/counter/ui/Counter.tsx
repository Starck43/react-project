import { Button, ButtonFeature, ButtonSize } from "@/shared/ui/button"
import { Flex } from "@/shared/ui/stack"

import { useCounterValue } from "../model/selectors/getCounterValue"
import { useCounterActions } from "../model/slice/counterSlice"

export const Counter = () => {
    const counterValue = useCounterValue()
    const { increment, decrement, incrementByAmount } = useCounterActions()

    const OnIncrementBtnClick = () => increment()
    const OnDecrementBtnClick = () => decrement()
    const incByAmountClick = () => incrementByAmount(10)

    return (
        <Flex justify="center" fullWidth>
            <Button
                data-testid="Counter.Decrement"
                variant="primary"
                feature={ButtonFeature.CLEAR}
                size={ButtonSize.LARGE}
                squared
                bordered
                onClick={OnDecrementBtnClick}
            >
                -
            </Button>
            <Button
                data-testid="Counter.Value"
                variant="primary"
                size={ButtonSize.LARGE}
                squared
                onClick={incByAmountClick}
            >
                {counterValue}
            </Button>
            <Button
                data-testid="Counter.Increment"
                variant="primary"
                feature={ButtonFeature.CLEAR}
                size={ButtonSize.LARGE}
                squared
                bordered
                onClick={OnIncrementBtnClick}
            >
                +
            </Button>
        </Flex>
    )
}
