import React from 'react';
import {useHistory} from 'react-router-dom';
import RegisterForm from './RegisterForm';

function RegisterPage(){

  return (
    <>
    <RegisterForm />
    <button onClick={()=> console.log("in submit button")}> Login </button>
    </>
  )
} // end function RegisterPage

export default RegisterPage