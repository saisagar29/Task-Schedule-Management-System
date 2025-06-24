import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyOTP } from '../../services/authService';

function OTPForm() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    const res = await verifyOTP(otp);
    if (res.ok) {
      navigate('/reset-password');
    } else {
      alert("Invalid or expired OTP.");
    }
  };

  return (
    <form onSubmit={handleVerify}>
      <label>One-Time Password</label>
      <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default OTPForm;
