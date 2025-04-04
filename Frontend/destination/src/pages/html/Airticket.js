import React, { useState } from 'react';

const Airticket = () => {
  // State management for form fields
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [tripType, setTripType] = useState('one-way');

  const cityLocations = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Ahmedabad",
    "Kochi",
    "Goa",
    "Pune",
    "Jaipur",
    "Thiruvananthapuram",
    "Mangaluru",
    "Madurai",
    "Srinagar",
    "Bhopal",
    "Visakhapatnam",
    "Lucknow",
    "Surat",
    "Vadodara",
    "Leh",
    "Siliguri",
    "Port Blair",
    "Jammu",
    "Tiruchirappalli",
    "Dibrugarh",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      fromLocation,
      toLocation,
      departureDate,
      returnDate,
      tripType,
    });
  };

  return (
    <div>
      <div>
        <img src="/images/banner.jpg" className="img-fluid" alt="Banner" style={bannerStyle} />
      </div>
      <div>
          <h1
            align="center"
            style={{
              color: 'wheat',
              position: 'fixed',
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

      <div style={{ padding: '17%' }}>
        <h2>Air Tickets</h2>
        <p>Explore the skies with our hassle-free air ticket booking services. Enjoy great deals and seamless travel experiences.</p>
        <p>For more information, contact our support team or log in to your account.</p>

        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <label htmlFor="fromLocation">From:</label>
            <select
              id="fromLocation"
              name="fromLocation"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="">Select Departure City</option>
              {cityLocations.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="toLocation">To:</label>
            <select
              id="toLocation"
              name="toLocation"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="">Select Destination City</option>
              {cityLocations.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="departureDate">Departure Date:</label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          {tripType === 'return' && (
            <div style={inputGroupStyle}>
              <label htmlFor="returnDate">Return Date:</label>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required
                style={inputStyle}
              />
            </div>
          )}

          <div style={inputGroupStyle}>
            <label htmlFor="tripType">Trip Type:</label>
            <select
              id="tripType"
              name="tripType"
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              required
              style={inputStyle}
            >
              <option value="one-way">One-Way</option>
              <option value="return">Return</option>
            </select>
          </div>

          <button type="submit" style={submitButtonStyle}>Book Now</button>
        </form>
      </div>
    </div>
  );
};

// const headingStyle = {
//   color: 'wheat',
//   position: 'absolute',
//   marginTop: '1%',
//   marginLeft: '25%',
//   fontSize: '2rem',
// };

const bannerStyle = {
  height: '10em',
  width: '100%',
  position: 'absolute',
};
<div>
  
</div>
const formStyle = {
  marginTop: '20px',
};

const inputGroupStyle = {
  marginBottom: '15px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '1rem',
  marginTop: '5px',
};

const submitButtonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer',
  width: '100%',
};

export default Airticket;
