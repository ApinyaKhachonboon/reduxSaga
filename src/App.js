import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { ADD_REQ, DECREMENT_REQ, INCREMENT_ASYNC_REQ, INCREMENT_REQ } from './redux/actionTypes';
// import * as actions from "./redux/actions/counter.action"
const App = () => {

  const dispatch = useDispatch()
  const action = (type, payload) => dispatch({type, payload})
  const counterReducer = useSelector(({counterReducer}) => counterReducer)


  return (
  <>
    <button onClick={()=>action(INCREMENT_ASYNC_REQ)}>Increment after 1 second</button>
    <button onClick={()=>action(INCREMENT_REQ)}>Increment</button>
    <button onClick={()=>action(DECREMENT_REQ)}>Decrement</button>
    <button onClick={()=>action(ADD_REQ, 10)}>Add</button>
    <hr />
    <div>Clicked: {counterReducer.count}</div>
  </>
  )
};

export default App;
