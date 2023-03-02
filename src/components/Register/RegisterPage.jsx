import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import RegisterForm from './RegisterForm';

function RegisterPage(){

  const navigate = useNavigate();

  return (
    <>
    <RegisterForm />
    <button style={{marginRight: "30px", padding: "20px", marginLeft: "20px"}} onClick={()=> navigate("/")}> Login </button>
      {/* <Link to="/default"><button style={{marginLeft: "300px"}}>Default Page</button></Link> */}
    </>
  )
} // end function RegisterPage

export default RegisterPage