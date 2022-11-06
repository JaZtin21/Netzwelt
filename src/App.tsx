import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  redirect,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';

function App() {

  const [User, setUser] = useState<{username?:string , displayName?:string, roles?:string[]} | null>({
    username:'',
    displayName:'',
    roles:[]
  })

  useEffect(()=>{
    var userData = localStorage.getItem('UserData');
    var UserParsed:{username?:string , displayName?:string, roles?:string[]} = userData? JSON.parse(userData): ''

    setUser({
      username: UserParsed.username,
      displayName: UserParsed.displayName,
      roles: UserParsed.roles,
    })

  },[])

  useEffect(()=>{
    console.log(User)
  },[User])





  return (


     <Router>
      <Routes>

      <Route path='/' element={<Navigate to='/login'/>}>
      </Route>
      <Route path='/login' element={
        User?.username?
        <Navigate to='/home'/>:
        <Login/>
      } >
      </Route>
      <Route path='/home' element={
        User?.username?
        <>
        <div className='topnav'><p>Welcome <span>{User?.displayName}</span> </p> <button onClick={()=>{localStorage.removeItem("UserData");window.location.reload()}}>Logout</button></div>
        <Home/>
        </>
        :<Navigate to='/login'/>
      }>

      </Route>
      </Routes>
     </Router>

  );
}

export default App;
