import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import LogOutButton from '../LogOutButton/LogOutButton';


function LoginPage() {

  const navigate = useNavigate();
  const errors = useSelector(store => store.errors)
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginFunction = (e) => {
    e.preventDefault();
    console.log('in login function');

    if (username && password){
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password
        }
      })// end dispatch
      // navigate("/default")
    } else {
      dispatch({type: 'LOGIN_INPUT_ERROR'});
    }
  } // end login Function

  return(
    <>
    <form className="loginForm" onSubmit={loginFunction}>
    {errors.loginMessage && (
      <h3 className="alert" role="alert">
        {errors.loginMessage}
      </h3>
    )}
      <div>
        <h2>LOGIN</h2>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          name="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>   
      </div>
      <div>   
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      </div>
      <div>
        <input className="loginBtn" type="submit" name="LOGIN" />
      </div>

    </form>
      <Link to="/register"><button style={{ padding: "40px", marginLeft: "500px" }}>Register</button></Link>
      <LogOutButton to="/login"/>
    </>
  )
}// end function LandingPage

export default LoginPage;