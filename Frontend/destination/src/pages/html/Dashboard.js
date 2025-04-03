import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

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

const Dashboard = () => {
  const navigate = useNavigate();     

  useEffect(() => {
    const authToken = Cookies.get('authToken');
    if (!authToken) {
      navigate('/destination/login');
    }
  }, [navigate]);

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
          <Link to="/destination/booking?title=Crazy+Deals&location=Bali,+Indonesia&price=89&duration=7">
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
            <p><strong>Price:</strong> $89/day</p>
            <p>Book now for exclusive discounts on the best travel deals to beautiful Bali!</p>
          </div>
        </div>

        <div style={cardStyle}>
          <Link to="/destination/booking?title=International+Veg+Special&location=Zurich,+Switzerland&price=95&duration=5">
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
            <p><strong>Price:</strong> $95/day</p>
            <p>Enjoy a delightful vegetarian feast in the heart of Switzerland with our special package!</p>
          </div>
        </div>

        <div style={cardStyle}>
          <Link to="/destination/booking?title=Cruise+Tour&location=Caribbean+Sea&price=120&duration=10">
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
            <p><strong>Price:</strong> $120/day</p>
            <p>Sail across the Caribbean islands, with luxurious stops and plenty of leisure activities on board.</p>
          </div>
        </div>

        <div style={cardStyle}>
          <Link to="/destination/booking?title=Europe+Tour&location=Paris,+France&price=150&duration=12">
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
            <p><strong>Price:</strong> $150/day</p>
            <p>Explore Europe's most iconic cities, from Paris to Rome, with guided tours and cultural experiences!</p>
          </div>
        </div>

        <div style={cardStyle}>
          <Link to="/destination/booking?title=Honeymoon+Special&location=Maldives&price=69&duration=6">
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
            <p><strong>Price:</strong> $69/day</p>
            <p>Celebrate your honeymoon in paradise with beautiful beach resorts and romantic candlelit dinners!</p>
          </div>
        </div>

        <div style={cardStyle}>
          <Link to="/destination/booking?title=USA+Tour&location=New+York,+USA&price=135&duration=8">
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
            <p><strong>Price:</strong> $135/day</p>
            <p>Explore the vibrant city life of New York, from Times Square to Central Park, with our guided USA Tour.</p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Itlay+Tour&location=Tuscany,+Itlay&price=77&duration=7">
            <img
              src="/images/b.jpg"
              alt="Itlay"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Itlay Tour</h5>
            <p><strong>Location:</strong> Italy</p>
            <p><strong>Price:</strong> $77/day</p>
            <p>Savor the flavors of Italy with a delicious vegetarian spread in the heart of Tuscany!
            </p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Awiss+Alps&location=Switzerland&price=105&duration=9">
            <img
              src="/images/robz-8IY27TsGaVE-unsplash.jpg"
              alt="Switzerland"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Switzerland</h5>
            <p><strong>Location:</strong> Switzerland</p>
            <p><strong>Price:</strong> $105/day</p>
            <p>Enjoy a delightful vegetarian feast in the heart of Switzerland vegetarian delights amidst the stunning beauty of the Swiss Alps!
            </p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Greece&location=Greece&price=65&duration=6">
            <img
              src="/images/france.webp"
              alt="Greece"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Greece</h5>
            <p><strong>Location:</strong> Greece</p>
            <p><strong>Price:</strong> $65/day</p>
            <p>Embark on a culinary adventure in Greece, where vibrant vegetarian dishes meet ancient history!
            </p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Bali+Indonesia+Tour&location=Bali,+Indonesia&price=69&duration=5">
            <img
              src="/images/c.jpg"
              alt="Bali Indonesia"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Bali Indonesia</h5>
            <p><strong>Location:</strong>Bali, Indonesia</p>
            <p><strong>Price:</strong> $69/day</p>
            <p>Experience a vegetarian paradise in Bali, surrounded by tropical landscapes and serene temples!</p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Jaipur+India+Tour&location=Jaipur,+India&price=30&duration=8">
            <img
              src="/images/d.jpg"
              alt="India Jaipur"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Jaipur India</h5>
            <p><strong>Location:</strong> Jaipur, India</p>
            <p><strong>Price:</strong> $30/day</p>
            <p>Treat yourself to an authentic vegetarian experience in India’s spice-filled streets of Jaipur!</p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Phuket+Thailand+Special&location=Phuket,+Thailand&price=45&duration=9">
            <img
              src="/images/e.jpg"
              alt="Phuket Thailand"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Phuket Thailand</h5>
            <p><strong>Location:</strong> Phuket, Thailand</p>
            <p><strong>Price:</strong> $45/day</p>
            <p>Enjoy fresh, local vegetarian cuisine on the sun-kissed beaches of Thailand’s Phuket Island!</p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Barcelona+Barcelona=Barcelona,+Spain&price=85&duration=4">
            <img
              src="/images/f.jpg"
              alt="Barcelona"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Barcelona</h5>
            <p><strong>Location:</strong>Spain Barcelona</p>
            <p><strong>Price:</strong> $85/day</p>
            <p>Discover the rich flavors of Spain with a delightful vegetarian feast in the heart of Barcelona!
            </p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Kyoto Tour&location=Kyoto&price=40&duration=4">
            <img
              src="/images/g.jpg"
              alt="Kyoto Special"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Kyoto</h5>
            <p><strong>Location:</strong>Kyoto</p>
            <p><strong>Price:</strong> $40/day</p>
            <p>Relish the finest vegetarian dishes while exploring the timeless beauty of Kyoto’s gardens!</p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Fiordland+Newzealand&location=Fiordland,+Newzealand&price=90&duration=5">
            <img
              src="/images/h.jpg"
              alt="Fiordland, Newzealand"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Fiordland, Newzealand</h5>
            <p><strong>Location:</strong> Fiordland, Newzealand</p>
            <p><strong>Price:</strong> $90/day</p>
            <p>Savor the perfect vegetarian meal surrounded by the awe-inspiring views of New Zealand’s Fiordland!</p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Oxaca+Mexico=Oxaca,+Mexico&price=81&duration=3">
            <img
              src="/images/i.jpg"
              alt="Oxaca, Mexico "
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Oxaca, Mexico </h5>
            <p><strong>Location:</strong>Oxaca, Mexico </p>
            <p><strong>Price:</strong> $81/day</p>
            <p>Experience the vegetarian delights of Mexico’s colorful culture in the vibrant streets of Oaxaca!</p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Paris+France&location=Paris,+Frace&price=129&duration=6">
            <img
              src="/images/j.jpg"
              alt="Paris, Frace"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Paris, Frace</h5>
            <p><strong>Location:</strong> Paris, Frace</p>
            <p><strong>Price:</strong> $129/day</p>
            <p>Treat your taste buds to authentic vegetarian dishes in the charming streets of Paris, France!</p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Iceland&location=Iceland&price=59&duration=6">
            <img
              src="/images/k.jpg"
              alt="Iceland"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Iceland</h5>
            <p><strong>Location:</strong> Iceland</p>
            <p><strong>Price:</strong> $59/day</p>
            <p>Delight in fresh, flavorful vegetarian cuisine with a breathtaking view of Iceland’s waterfalls!</p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Marrakech+Tour&location=Marrakech&price=99&duration=8">
            <img
              src="/images/l.jpg"
              alt="Marrakech"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Marrakech</h5>
            <p><strong>Location:</strong> Marrakech</p>
            <p><strong>Price:</strong> $99/day</p>
            <p>Discover the vibrant vegetarian food scene while soaking in the breathtaking sights of Marrakech!</p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Maldives+Islands&location=Maldives&price=66&duration=5">
            <img
              src="/images/m.jpg"
              alt="Maldives Special"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Maldives Special</h5>
            <p><strong>Location:</strong> Maldives</p>
            <p><strong>Price:</strong> $66/day</p>
            <p>Enjoy a delightful vegetarian spread on the serene islands of the Maldives!</p>
          </div>
        </div>
        <div style={cardStyle}>
          <Link to="/destination/booking?title=Australia&location=Australia&price=$139&duration=6">
            <img
              src="/images/n.jpg"
              alt="Australia"
              style={imageStyle}
              className="image-hover"
            />
          </Link>
          <div style={infoCardStyle}>
            <h5>Australia</h5>
            <p><strong>Location:</strong> Australia</p>
            <p><strong>Price:</strong> $139/day</p>
            <p><strong>Duration:</strong> 6 Days</p>
            <p>Indulge in the best vegetarian cuisine while enjoying the magical views of the Australian Alps!</p>
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
              box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
            }
            .link-item:hover {
              background-color: #0056b3;
              color: #ffffff;
              transform: translateY(-2px);
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
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
          to="/destination/bookings"
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

export default Dashboard;
