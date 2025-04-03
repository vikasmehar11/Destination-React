import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userInitials, setUserInitials] = useState('');
  const [loginTriggered, setLoginTriggered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  const checkLoginStatus = () => {
    const tokenExists = !!Cookies.get('authToken');
    setIsLoggedIn(tokenExists);
    }

  useEffect(() => {
    checkLoginStatus();
  }, [loginTriggered, location.pathname]); 

  const handleLogout = () => {
    Cookies.remove('authToken');  
    Cookies.remove('userName'); 
    Cookies.remove('userEmail'); 
    setLoginTriggered(prev => !prev); 
    navigate('/');  
  };

  const handleHomeClick = (e) => {
    e.preventDefault();  
    const tokenExists = !!Cookies.get('authToken');

    if (tokenExists) {
      navigate('/destination/dashboard');
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    if (location.pathname === '/destination/dashboard' && isLoggedIn) {
      setLoginTriggered(prev => !prev); 
    }
  }, [location.pathname, isLoggedIn]);

  return (
    <div>
      <style>
        {`
          .navbar {
              background-color: #343a40;
              padding: 0.5rem 1rem;
          }
          .navbar-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              max-width: 1200px;
              margin: 0 auto;
          }
          .navbar-brand {
              color: white;
              text-decoration: none;
              font-weight: bold;
              margin-right: 15px;
              cursor: pointer;
          }
          .profile-icon {
              width: 40px;
              height: 40px;
              background-color: #007bff;
              color: white;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-weight: bold;
              font-size: 16px;
              cursor: pointer;
              margin-left: 15px;
              border: 2px solid white; 
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); 
          }
        `}
      </style>

      <nav className="navbar">
        <div className="navbar-container">
          <Link className="navbar-brand" to="/" onClick={handleHomeClick}>Home</Link>
          <Link className="navbar-brand" to="/destination/about">About</Link>
          <Link className="navbar-brand" to="/destination/contactus">Contact Us</Link>

          {isLoggedIn ? (
            <>
              <span className="navbar-brand" onClick={handleLogout}>Logout</span>
            </>
          ) : (
            <Link className="navbar-brand" to="/destination/login">Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
