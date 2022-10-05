import {getCounterValue} from "entities/counter/model/selectors/getCounterValue/getCounterValue"
import {useDispatch, useSelector} from "react-redux"
import {Button, ButtonSize} from "shared/ui/button/Button"
import {counterActions} from "../model/slice/counterSlice"


export const Counter = () => {
    const dispatch = useDispatch()
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
