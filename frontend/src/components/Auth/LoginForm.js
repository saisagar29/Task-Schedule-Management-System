import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';

function LoginForm() {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await login({ regNo, password });
    const data = await response.json();
    if (response.ok) {
      sessionStorage.setItem('authToken', data.token);
      sessionStorage.setItem('role', data.role);
      navigate(data.role === 'manager' ? '/manager-dashboard' : '/staff-dashboard');
    } else {
      alert(data.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>Registration No.</label>
      <input type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)} placeholder="Enter Registration no." />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
      <button type="submit">LOGIN</button>
    </form>
  );
}

export default LoginForm;
