import React from 'react'
import CounterDown from './CounterDown'

const Counter = () => <>
            <CounterDown count={0} reset={10} tick={1000}/>
                </>
export default CounterDown
