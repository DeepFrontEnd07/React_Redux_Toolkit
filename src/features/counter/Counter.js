import React from 'react'
import './Counter.css'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'



function Counter() {
    // Use selector to select the value from the counterSlice
    const count=useSelector((state)=>state.counter.value)
    
    // use Dispatch to perform action on it 
    const dispatch=useDispatch()


    const handleIncrement = ()=>{
        dispatch(increment())
    }

    const handleDecrement = ()=>{
        dispatch(decrement())

    }
    const handleReset=()=>{
        dispatch(reset())
    }
  return (
    <>
    <h1>React Redux Toolkit - Counter App</h1>
    <div className="container">
        <button onClick={handleIncrement}> + </button>
        <p>Count : {count} </p>
        <button onClick={handleDecrement}> - </button>
        <button onClick={handleReset} id="reset">Reset</button>
    </div>
    </>
  )
}

export default Counter
