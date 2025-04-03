import React from 'react';

const Cancellations = () => {
  return (
    <div>

      <div>
        <img src="/images/banner.jpg" className="img-fluid" alt="Banner" style={bannerStyle} />
      </div>
      <div>
        <h1 style={headingStyle}>Cancellations</h1>
      </div>

      <div style={{padding: '17%' }}>
        <h2>Cancel Your Bookings</h2>
        <p>Need to cancel? No problem! Easily manage cancellations for flights, trains, and buses.</p>
        <p>Log in to view your bookings and proceed with cancellations.</p>
      </div>

    </div>
  );
};

const headingStyle = {
  color: 'wheat',
  position: 'absolute',
  marginTop: '1%',
  marginLeft: '25%',
  fontSize: '2rem',
};

const bannerStyle = {
  height: '11em',
  width: '100%',
  position: 'absolute',
};

export default Cancellations;
