import React, { useState } from 'react';

const Trainticket = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [tripType, setTripType] = useState('one-way'); 
  const [trainInfo, setTrainInfo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTrainInfo({
      source,
      destination,
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
              marginTop: '1%',
              marginLeft: '32%',
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
        <h2>Train Tickets</h2>
        <p>Travel across destinations by train with ease. Book tickets online and enjoy a comfortable journey.</p>
        <p>Fill in the details below to search for available trains:</p>

        <form onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <label htmlFor="source">Source (Departure City):</label>
            <input
              type="text"
              id="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Enter source city"
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="destination">Destination (Arrival City):</label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination city"
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label htmlFor="departureDate">Departure Date:</label>
            <input
              type="date"
              id="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          {tripType === 'return' && (
            <div style={inputGroupStyle}>
              <label htmlFor="returnDate">Return Date:</label>
              <input
                type="date"
                id="returnDate"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                style={inputStyle}
                required
              />
            </div>
          )}

          <div style={inputGroupStyle}>
            <label htmlFor="tripType">Trip Type:</label>
            <select
              id="tripType"
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="one-way">One-Way</option>
              <option value="return">Return</option>
            </select>
          </div>

          <button type="submit" style={submitButtonStyle}>
            Search Trains
          </button>
        </form>

        {trainInfo && (
          <div style={trainInfoStyle}>
            <h3>Train Information</h3>
            <p><strong>Source:</strong> {trainInfo.source}</p>
            <p><strong>Destination:</strong> {trainInfo.destination}</p>
            <p><strong>Departure Date:</strong> {trainInfo.departureDate}</p>
            {trainInfo.tripType === 'return' && (
              <p><strong>Return Date:</strong> {trainInfo.returnDate}</p>
            )}
            <p><strong>Trip Type:</strong> {trainInfo.tripType === 'one-way' ? 'One-Way' : 'Return'}</p>
          </div>
        )}
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
  height: '10em',
  width: '100%',
  position: 'absolute',
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

const trainInfoStyle = {
  marginTop: '20px',
  padding: '15px',
  backgroundColor: '#f1f1f1',
};

export default Trainticket;
