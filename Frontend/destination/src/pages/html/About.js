import React from 'react';

const About = () => {
  return (
    <div>
      <div>
          <img
            src="/images/banner.jpg"
            className="img-fluid"
            alt="..."
            style={{ height: '10em', width: '100%', position: 'fixed', zIndex: 1 }}
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
      <br />
      <div>
        <h2 align="center" style={{ color: 'rgb(21, 64, 99)', marginTop:'12%' } }>About Us:</h2>
        <h3 align="center" style={{ color: 'green' }}>Journey Beyond Limits: Crafting Unforgettable Travel Experiences Just for You</h3>
        <p style={{ paddingLeft: '10%', paddingRight: '10%', marginTop: '3%' }}>
          Destination Tours and Travels is one of the fastest growing online travel portals in Asia, offering travellers an extensive selection of hotels, activities and travel services to meet every budget and activities of every kind at competitive rates. With over hundreds of thousands of hotel partners worldwide and a comprehensive offering of flight inventory made available on the website, travellers can book everything they need for a holiday - rooms to meet every budget, activities of every kind and travel services to complement.  
          This website is operated by Destination Tours and Travels, Inc., with its head office at 1111 Destination Tours and Travels Group Way W, Seattle, WA98119, USA.  
          Destination Tours and Travels, Inc. is a registered Seller of Travel in the State of Washington USA, Licence No. 601975803. 
          Destination Tours and Travels, Inc. is part of the Expedia Group of companies.
        </p>
        <img src="/images/50.png" className="img-thumbnail" height="5%" width="5%" alt="..." style={{ marginLeft: '30%' }} />
        <p style={{ marginLeft: '25%', color: 'green' }}>More than 50 travel packages</p>
        <img src="/images/7.png" className="img-thumbnail" height="9%" width="4.5%" alt="..." style={{ marginLeft: '60%', position: 'absolute', marginTop: '-8.8%' }} />
        <p style={{ marginLeft: '55%', position: 'absolute', marginTop: '-2.6%', color: 'green' }}>More than 7 years in industry</p>
      </div>
    </div>
  );
};

export default About;
