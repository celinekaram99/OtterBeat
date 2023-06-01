// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './login.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for handling password reset request
    console.log('Password reset requested for email:', email);
    // Add your logic here to handle the password reset request, such as making an API call
  };

  return (
    <div>
      <h1>Forgot Your Password?</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
