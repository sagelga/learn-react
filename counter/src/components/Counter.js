import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store'

import classes from './Counter.module.css'

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter)
    const dispatch = useDispatch()

    const toggleCounterHandler = () => {}

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5))
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
            <button onClick={incrementHandler}>Increase</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrease</button>
        </main>
    )
}

export default Counter
