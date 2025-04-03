import React, { useEffect, useState } from 'react';

const Booking = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [duration, setDuration] = useState(3);
  const [numPersons, setNumPersons] = useState(1);
  const [date, setDate] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTitle(params.get('title') || 'N/A');
    setLocation(params.get('location') || 'N/A');
    setBasePrice(parseFloat(params.get('price')) || 0);
  }, []);

  useEffect(() => {
    setPrice(basePrice * duration * numPersons);
  }, [duration, numPersons, basePrice]);

  const handleDurationChange = (change) => {
    setDuration((prev) => Math.max(3, prev + change));
  };

  const handlePersonsChange = (change) => {
    setNumPersons((prev) => Math.max(1, prev + change));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!date) {
      alert('Please select a valid date.');
      return;
    }

    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;

    const bookingData = {
      username: name,
      email,
      phone,
      location,
      date,
      duration,
      persons: numPersons,
      price,
    };

    try {
      const response = await fetch('https://destination-react-backend.onrender.com/destination/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Booking successful! Pay via the URL sent to your registered phone number to get booking details.');
        form.reset();
        setDate('');
      } else {
        alert('Booking failed: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
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
    <div style={{ padding: '2rem', paddingBottom: '4rem' }}>
      <h1 style={headingStyle}>Booking</h1>
      <div id="bookingDetails" style={detailsContainerStyle}>
        <h3>{title}</h3>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>Duration:</strong> {duration} Days</p>
        <button onClick={() => handleDurationChange(-1)} style={buttonStyle}>-</button>
        <button onClick={() => handleDurationChange(1)} style={buttonStyle}>+</button>
        <p><strong>Persons:</strong> {numPersons}</p>
        <button onClick={() => handlePersonsChange(-1)} style={buttonStyle}>-</button>
        <button onClick={() => handlePersonsChange(1)} style={buttonStyle}>+</button>
      </div>

      <form id="bookingForm" onSubmit={handleSubmit} style={formStyle}>
        <div style={inputContainerStyle}>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input type="text" name="name" style={inputStyle} placeholder="Enter your name" required />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input type="email" name="email" style={inputStyle} placeholder="Enter your email" required />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="phone" style={labelStyle}>Phone</label>
          <input type="tel" name="phone" style={inputStyle} placeholder="Enter your phone number" required />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="date" style={labelStyle}>Select Date</label>
          <input type="date" name="date" style={inputStyle} value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit" style={buttonStyle}>Book Now</button>
      </form>
    </div>
    </div>
  );
};

const bannerStyle = {
  height: '10em',
  width: '100%',
  position: 'fixed',
};

const headingStyle = {
  textAlign: 'center',
  color: 'rgb(21, 64, 99)',
  marginTop: '140px'
};

const detailsContainerStyle = {
  textAlign: 'center',
  backgroundColor: '#f0f0f0',
  padding: '10px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '45px',
};

const inputContainerStyle = {
  marginBottom: '15px',
  width: '300px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontSize: '1rem',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  margin: '5px',
};

export default Booking;
