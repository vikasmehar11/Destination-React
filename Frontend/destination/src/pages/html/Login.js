import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      const response = await fetch('https://destination-react-backend.onrender.com/destination/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Backend error occurred: ' + response.status);
      }

      const data = await response.json();
      console.log('Backend Response:', data);

      if (data.status) {
        setSuccess(data.message);
        Cookies.set('authToken', data.token, { secure: true, sameSite: 'Strict' });
        Cookies.set('userEmail', email, { secure: true, sameSite: 'Strict' });

        setTimeout(() => {
          navigate('/destination/dashboard', { replace: true });
        }, 1000);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <img src="/images/banner.jpg" className="img-fluid" alt="Banner"
          style={{ height: '10em', width: '100%', position: 'absolute', zIndex: 1 }} />
      </div>
      <div>
        <h1 align="center" style={{ color: 'wheat', position: 'absolute', marginTop: '2%', marginLeft: '56%', zIndex: 2,fontFamily: '"Brush Script MT", cursive',fontSize: '2rem',fontWeight: 'bold' }}>
          Destination Tours And Travels
        </h1>
      </div>
      <div style={{ marginTop: '15%' }}>
        <h2 align="center" style={{ color: 'rgb(21, 64, 99)' }}>Login to Your Account</h2>
      </div>
      <div align="center">
        <form onSubmit={handleSubmit}>
          <table align="center">
            <tbody>
              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: '5px', margin: '5px' }}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Password:</td>
                <td>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '5px', margin: '5px' }}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="submit" value="Login" style={{ padding: '5px 10px', margin: '10px' }} />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Link to="/destination/signup">Don't have an account? Sign Up</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
        {success && <div style={{ color: 'green', textAlign: 'center' }}>{success}</div>}
      </div>
    </div>
  );
};

export default Login;
