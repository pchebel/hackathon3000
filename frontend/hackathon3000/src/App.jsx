import React, { useState } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import SignIn from './Components/SignIn/SignIn';
import Board from './Components/Test/Board';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {

  const [user,setUser] = useState("");

  const reduxState = useSelector(state => state);
  // const dispatch = useDispatch();

  const checkUser = () => {
    const tempUser = sessionStorage("id")
    setUser(tempUser)
    console.log(user)
  }

  return (

        <div className="App">
          { reduxState.hackReducers.user === "" && <SignIn /> }
          { reduxState.hackReducers.user !== "" && <Board />}
        </div>
  );


}

export default App;
