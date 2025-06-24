import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Auth/LoginForm';
import ForgetPasswordForm from './components/Auth/ForgetPasswordForm';
import OTPForm from './components/Auth/OTPForm';
import NewPasswordForm from './components/Auth/NewPasswordForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgetPasswordForm />} />
        <Route path="/verify-otp" element={<OTPForm />} />
        <Route path="/reset-password" element={<NewPasswordForm />} />
      </Routes>
    </Router>
  );
}

export default App;
