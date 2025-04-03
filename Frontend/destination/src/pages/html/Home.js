import React from 'react';
import { Link } from 'react-router-dom';

const galleryContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start', 
  marginTop: '15%',
  marginLeft: '30%', 
  width: '70%', 
};

const cardStyle = {
  width: '28%', 
  marginBottom: '2%',
  boxSizing: 'border-box',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '10px', 
  transition: 'all 0.3s ease', 
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  transition: 'transform 0.3s ease', 
};

const infoCardStyle = {
  padding: '10px',
  backgroundColor: '#fff',
  textAlign: 'center',
};

const Home = () => {
  return (
    <div className="home-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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

      <div style={galleryContainerStyle}>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Crazy+Deals&location=Bali,+Indonesia&price=799&duration=7">
            <img
              src="/images/Crazy-Deals-Banner-1-421x363.html"
              alt="Crazy Deals"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Crazy Deals</h5>
            <p><strong>Location:</strong> Bali, Indonesia</p>
            <p><strong>Price:</strong> $799</p>
            <p><strong>Duration:</strong> 7 Days</p>
            <p>Book now for exclusive discounts on the best travel deals to beautiful Bali!</p>
          </div>
        </div>

        <div style={cardStyle}>
          <Link to="/destination/booking?title=International+Veg+Special&location=Zurich,+Switzerland&price=950&duration=5">
            <img
              src="/images/International-Veg-Special.html"
              alt="International Veg Special"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>International Veg Special</h5>
            <p><strong>Location:</strong> Zurich, Switzerland</p>
            <p><strong>Price:</strong> $950</p>
            <p><strong>Duration:</strong> 5 Days</p>
            <p>Enjoy a delightful vegetarian feast in the heart of Switzerland with our special package!</p>
          </div>
        </div>

        <div style={cardStyle}>
          <Link to="/destination/booking?title=Cruise+Tour&location=Caribbean+Sea&price=1200&duration=10">
            <img
              src="/images/Cruise-Tour-Banner-421x363.html"
              alt="Cruise Tour"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Cruise Tour</h5>
            <p><strong>Location:</strong> Caribbean Sea</p>
            <p><strong>Price:</strong> $1200</p>
            <p><strong>Duration:</strong> 10 Days</p>
            <p>Sail across the Caribbean islands, with luxurious stops and plenty of leisure activities on board.</p>
          </div>
        </div>

        <div style={cardStyle}>
          <Link to="/destination/booking?title=Europe+Tour&location=Paris,+France&price=1500&duration=12">
            <img
              src="/images/Europe-Banner-1-421x363.html"
              alt="Europe Tour"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Europe Tour</h5>
            <p><strong>Location:</strong> Paris, France</p>
            <p><strong>Price:</strong> $1500</p>
            <p><strong>Duration:</strong> 12 Days</p>
            <p>Explore Europe's most iconic cities, from Paris to Rome, with guided tours and cultural experiences!</p>
          </div>
        </div>

        <div style={cardStyle}>
          <Link to="/destination/booking?title=Honeymoon+Special&location=Maldives&price=2200&duration=6">
            <img
              src="/images/Honeymoon-Banner-421x363.html"
              alt="Honeymoon Special"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Honeymoon Special</h5>
            <p><strong>Location:</strong> Maldives</p>
            <p><strong>Price:</strong> $2200</p>
            <p><strong>Duration:</strong> 6 Days</p>
            <p>Celebrate your honeymoon in paradise with beautiful beach resorts and romantic candlelit dinners!</p>
          </div>
        </div>

        <div style={cardStyle}>
          <Link to="/destination/booking?title=USA+Tour&location=New+York,+USA&price=1350&duration=8">
            <img
              src="/images/USA-Banner-421x363.html"
              alt="USA Tour"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>USA Tour</h5>
            <p><strong>Location:</strong> New York, USA</p>
            <p><strong>Price:</strong> $1350</p>
            <p><strong>Duration:</strong> 8 Days</p>
            <p>Explore the vibrant city life of New York, from Times Square to Central Park, with our guided USA Tour.</p>
          </div>
        </div>
      </div>

      <div
        className="list-group"
        style={{
          position: 'fixed',
          top: '38%',
          left: '7.5%',
          width: '200px',
        }}
      >
        <style>
          {`
            .link-item {
              font-size: 16px;
              background-color: #007bff;
              color: white;
              border: 1px solid #007bff;
              padding: 12px 20px;
              text-align: center;
              margin-bottom: 12px;
              display: block;
              border-radius: 8px;
              text-decoration: none;
              font-weight: bold;
              transition: all 0.3s ease;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .link-item:hover {
              background-color: #0056b3;
              color: #ffffff;
              transform: translateY(-2px);
              box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
            }
            .list-group {
              display: flex;
              flex-direction: column;
              gap: 10px;
            }

            /* Image hover effect */
            .image-hover:hover {
              transform: scale(1.05); /* Slight zoom effect */
            }
          `}
        </style>

        <Link
          to="/destination/login"
          className="list-group-item list-group-item-action list-group-item-secondary link-item"
        >
          Bookings
        </Link>
        <Link
          to="/destination/airticket"
          className="list-group-item list-group-item-action list-group-item-secondary link-item"
        >
          Air Ticket
        </Link>
        <Link
          to="/destination/trainticket"
          className="list-group-item list-group-item-action list-group-item-secondary link-item"
        >
          Train Ticket
        </Link>
        <Link
          to="/destination/busticket"
          className="list-group-item list-group-item-action list-group-item-secondary link-item"
        >
          Bus Ticket
        </Link>
      </div>
    </div>
  );
};

export default Home;
