import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !email || !password || !confirmpassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmpassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

        try {
      console.log('Sending data to the backend:', { username, email, password });

      const response = await axios.post('/destination/signup', {
        username,
        email,
        password,
        confirmpassword,
      });

      console.log('Response from backend:', response.data);

      if (response.status === 200 || response.status === 201) {
        setSuccess(response.data.message);
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        setTimeout(() => {
          navigate('/destination/login'); 
        }, 2000); 
      } else {
        setError(response.data.message || 'Signup failed.');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setError(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };
    
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <img
          src="/images/banner.jpg"
          className="img-fluid"
          alt="Banner"
          style={{
            height: '10em',
            width: '100%',
            position: 'absolute',
            zIndex: 1,
          }}
        />
      </div>

      <div>
        <h1
          align="center"
          style={{
            color: 'wheat',
            position: 'absolute',
            marginTop: '2%',
            marginLeft: '56%',
            zIndex: 2,
            fontFamily: '"Brush Script MT", cursive',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}
        >
          Destination Tours And Travels
        </h1>
      </div>

      <div>
        <h2 align="center" style={{ color: 'rgb(21, 64, 99)', marginTop: '15%' }}>
          Sign Up for Your Account
        </h2>

        <div align="center">
          <form onSubmit={handleSubmit}>
            <table align="center">
              <tbody>
                <tr>
                  <td>Username:</td>
                  <td>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{ padding: '5px', margin: '5px' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ padding: '5px', margin: '5px' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Password:</td>
                  <td>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ padding: '5px', margin: '5px' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Confirm Password:</td>
                  <td>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmpassword"
                      value={confirmpassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      style={{ padding: '5px', margin: '5px' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input
                      type="submit"
                      value="Sign Up"
                      style={{ padding: '5px 10px', margin: '10px' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

          {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
          {success && <div style={{ color: 'green', textAlign: 'center' }}>{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
