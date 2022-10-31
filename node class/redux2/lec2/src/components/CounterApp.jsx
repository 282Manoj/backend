import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { decrement,increment } from '../redux/counter/counter.actions';

const Counter = () => {
  const count=useSelector((store)=>store.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      CounterApp
       <h2>{count}</h2>
     <div>
      <button onClick={()=>dispatch(decrement())}>DEC</button>
      <button onClick={()=>dispatch(increment())}>INC</button>
     </div>
    </div>
  )
}

export default Counter
