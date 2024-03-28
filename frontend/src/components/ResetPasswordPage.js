import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // For extracting token from URL
import axios from 'axios';

const ResetPasswordPage = () => {
  const { id } = useParams(); // Extract token from URL
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(id)
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8081/reset-password/:${id}`, {
        id: id,
        newPassword: password
      });

      if (response.status === 200) {
        setSuccessMessage('Password reset successful.');
      } else {
        setErrorMessage('Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setErrorMessage('Failed to reset password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
