import './App.css';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';

import RegisterPage from '../Register/RegisterPage';
import LandingPage from '../LandingPage/LandingPage';



function App() {
  return (
    <>
      <LandingPage />
      <RegisterPage />
      
    </>
  );
}

export default App;
