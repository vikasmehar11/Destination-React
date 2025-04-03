import React from 'react';

const Footer = () => {
    return (
        <div style={containerStyle}>
            <footer className="footer" style={footerStyle}>
                &copy; 2025 Destination Tours And Travels. All Rights Reserved.
            </footer>
        </div>
    );
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const footerStyle = {
    position: 'fixed',
    bottom: 0,  
    left: 0,
    width: '100%',  
    backgroundColor: '#343a40',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',  
    alignItems: 'center',     
    padding: '1rem',
    height: '6px',  
    zIndex: 1000,  
};

export default Footer;
