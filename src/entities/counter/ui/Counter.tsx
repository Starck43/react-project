import {useSelector} from "react-redux"

import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {Button, ButtonSize} from "shared/ui/button/Button"

import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue"
import {counterActions} from "../model/slice/counterSlice"


export const Counter = () => {
    const dispatch = useAppDispatch()
    const counterValue = useSelector(getCounterValue)

    const inc = () => {
        dispatch(counterActions.increment())
    }

    const dec = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h3 data-testid="counter-value">{counterValue}</h3>
            <Button data-testid="counterIncrement" squared size={ButtonSize.SMALL} onClick={inc}>+</Button>
            <Button data-testid="counterDecrement" squared size={ButtonSize.SMALL} onClick={dec}>-</Button>
        </div>
    )
}
