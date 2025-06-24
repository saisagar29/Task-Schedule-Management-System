import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendOTP } from '../../services/authService';

function ForgetPasswordForm() {
  const [regNo, setRegNo] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    const res = await sendOTP(regNo);
    if (res.ok) {
      sessionStorage.setItem('resetRegNo', regNo);
      navigate('/verify-otp');
    } else {
      alert("Failed to send OTP.");
    }
  };

  return (
    <form onSubmit={handleSendOTP}>
      <label>Registration No.</label>
      <input type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)} placeholder="Enter Registration no." />
      <button type="submit">Send OTP</button>
    </form>
  );
}

export default ForgetPasswordForm;
