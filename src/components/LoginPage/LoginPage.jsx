import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './LoginPage.css';



function LoginPage() {

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginFunction = (e) => {
    e.preventDefault();
    console.log('in login function');

    dispatch({
      type: 'LOGIN',
      payload: {
        username: username,
        password: password
      }
    })// end dispatch
  } // end login Function

  return(
    <form className="loginForm" onSubmit={loginFunction}>
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
  )
}// end function LandingPage

export default LoginPage;