import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const validate = () => {
    if (!name || !email || !number) {
      alert("All fields must be filled out");
      return false;
    }

    if (!isNaN(name)) {
      alert("Name must be a string");
      return false;
    }

    if (number.length !== 10) {
      alert("Contact number must be exactly 10 digits");
      return false;
    }

    const atpos = email.indexOf("@");
    const dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      alert("Not a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");

      setName('');
      setEmail('');
      setNumber('');
    }
  };

  return (
    <div>
      <div>
          <img
            src="/images/banner.jpg"
            className="img-fluid"
            alt="..."
            style={{ height: '10em', width: '100%', position: 'fixed', zIndex: 1}}
          />
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
      <a href="tel:+919990990900" aria-label="Call us">
        <img src="/images/telephone-call.png" className="img-thumbnail" height="18%" width="11%" style={{ marginLeft: '20%', marginTop: '20%', position: 'absolute' }} alt="telephone icon" />
      </a>

      <a href="mailto:destinationtoursandtravels@gmail.com" aria-label="Email us">
        <img src="/images/email.png" className="img-thumbnail" height="19%" width="10%" style={{ marginLeft: '68%', marginTop: '19.5%', position: 'absolute' }} alt="email icon" />
      </a>

      <div align="center" style={{marginTop:'12%', position:'fixed', marginLeft:'36%'}}>
      <h2 align="center" style={{ color: 'rgb(21, 64, 99)' }}>Contact Us:</h2>
        <h3>Email:</h3>
        <h3>                                                            
          <a href="mailto:destinationtoursandtravels@gmail.com">destinationtoursandtravels@gmail.com</a>
        </h3>
        <h3 >Phone:</h3>
        <h3 >
          <a href="tel:+919990990900">+919990990900</a>
        </h3>
      </div>

      <br />
      <div style={{marginTop:'29%'}}>
      <h3 style={{ marginLeft: '37.5%', color: 'green'}}>Leave your contact details below</h3>
      <img src="/images/vecteezy_hand-point-down-vector-icon-design_14913265.jpg" className="img-thumbnail" height="4.5%" width="2%" style={{ marginLeft: '61%', marginTop: '-3%', position: 'absolute' }} alt="hand pointing icon" />
      </div>
      <br />

      <div align="center">
        <form id="myForm" onSubmit={handleSubmit}>
          <table align="center">
            <tbody>
              <tr>
                <td>Name:</td>
                <td><input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /></td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td><input type="number" id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} /></td>
              </tr>
              <tr>
                <td></td>
                <td><button type="submit" className="btn btn-success" style={{ marginLeft: '31%' }}>Submit</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
