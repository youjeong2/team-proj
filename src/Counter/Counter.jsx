import React, { useReducer } from 'react';

const counterTypes = {INCREASE: 'counter/INCREASE', DECREASE: 'counter/DECREASE'}
const counterIncrease = action => ({type: counterTypes.INCREASE, count: action.count + 1})
const counterDecrease = action => ({type: counterTypes.DECREASE, count: action.count - 1})
const counterReducer = (state, action) => {
    switch (action.type) {
        case counterTypes.INCREASE: return counterIncrease(action)
        case counterTypes.DECREASE: return counterDecrease(action)
        default: return state
    }
}
const Counter = () => {
    const [ action, dispatch ] = useReducer(counterReducer, {count: 0})
    return <>
        <h1>{action.count}</h1>
        <div>
            <button onClick={() => dispatch({type: counterTypes.INCREASE, count: action.count})}>+1</button>
            <button onClick={() => dispatch({type: counterTypes.DECREASE, count: action.count})}>-1</button>
        </div>
    </>    
}
export default Counter;
