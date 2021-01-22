import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import SignIn from './Components/SignIn/SignIn';
import { useSelector } from 'react-redux';

function App() {
  const reduxState = useSelector((state) => state);

  return (
    <div className="App">
      {reduxState.hackReducers.user === '' && <SignIn />}
      {reduxState.hackReducers.user !== '' && <HomePage name={reduxState.hackReducers.user} />}
    </div>
  );
}

export default App;
