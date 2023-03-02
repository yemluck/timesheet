import React, {useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import {useDispatch, useSelector} from 'react-redux';

import RegisterPage from '../Register/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';
import DefaultPage from '../DefaultPage/DefaultPage';




function App() {

  const dispatch = useDispatch();
  const user = useSelector(store=> store.user);

  useEffect(() => {
    dispatch({type: 'FETCH_USER'})
  }, [dispatch])

  const loginFunction = () => {
    user.id ? <Navigate to="/default" /> : <LoginPage />
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/login" element={loginFunction()} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/default" element={<DefaultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
