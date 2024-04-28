import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLock, FaKey } from 'react-icons/fa'; // Importă iconurile necesare
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false); 

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log('Login with:', { email, phone, password });
    setShowCodeInput(true);
  };

  const handleCodeVerification = (event) => {
    event.preventDefault();
    console.log('Verify code:', code);
  };

  return (
    <div className="login-page">
      {!showCodeInput ? (
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <div className="login-section">
            <h2 className="login-title">Login</h2>
            <div className="input-container">
              <FaEnvelope className="icon" />
              <input 
                type="email" 
                className="login-input1" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="input-container">
              <FaPhone className="icon" />
              <input 
                type="tel" 
                className="login-input1" 
                placeholder="Phone Number" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
              />
            </div>
            <div className="input-container">
              <FaLock className="icon" />
              <input 
                type="password" 
                className="login-input1" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button type="submit" className="login-button1">Login</button>
          </div>
          <div className="login-second-section"></div>
        </form>
      ) : (
        <form className="login-form" onSubmit={handleCodeVerification}>
          <div className="login-section">
            <h2 className="login-title">Enter the code</h2>
            <div className="input-container">
              <FaKey className="icon" />
              <input 
                type="text" 
                className="login-input1" 
                placeholder="Verification Code" 
                value={code} 
                onChange={(e) => setCode(e.target.value)} 
              />
            </div>
            <button type="submit" className="login-button1">Verify Code</button>
          </div>
          <div className="login-second-section"></div>
        </form>
      )}
    </div>
  );
};

export default Login;
