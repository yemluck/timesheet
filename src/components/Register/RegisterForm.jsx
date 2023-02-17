import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegisterForm.css'



function RegisterForm(){
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors)
  const dispatch = useDispatch();

  const registerUser = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
      }
    }) // end dispatch
  } // end registerUser
  return (
    <form className="registerContainer" onSubmit ={registerUser}>
      <h2>Register User</h2>
      {/* {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )} */}
      <div>
          <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            pattern="^[a-z0-9_-]{3,16}$"
            title='Minimum of 3 characters'
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>  
      </div>
      <div> 
        <label htmlFor="firstName">
          First name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>   
      </div>
      <div>
        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            required
            onChange={(event) => setLastName(event.target.value)}
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
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="registerBtn" type="submit" name="submit" value="Register" />
      </div>


    </form>
  )

} // end function register form

export default RegisterForm