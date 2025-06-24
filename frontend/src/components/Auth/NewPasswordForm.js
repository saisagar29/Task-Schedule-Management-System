import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../services/authService';

function NewPasswordForm() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    if (password !== confirm) return alert("Passwords do not match");

    const regNo = sessionStorage.getItem('resetRegNo');
    const res = await resetPassword({ regNo, password });
    if (res.ok) {
      sessionStorage.removeItem('resetRegNo');
      navigate('/');
    } else {
      alert("Failed to reset password.");
    }
  };

  return (
    <form onSubmit={handleReset}>
      <label>New Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <label>Confirm Password</label>
      <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewPasswordForm;
