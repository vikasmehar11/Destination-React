import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/html/Home'; 
import Login from './pages/html/Login';
import Signup from './pages/html/Signup';
import About from './pages/html/About';
import Services from './pages/html/Services';
import ContactUs from './pages/html/Contactus';
import Booking from './pages/html/Booking';
import Bookings from './pages/html/Mybookings';
import Airticket from './pages/html/Airticket';
import Trainticket from './pages/html/Trainticket';
import Busticket from './pages/html/Busticket';
import Cancellations from './pages/html/Cancellations';
import Dashboard from './pages/html/Dashboard';

function App() {
  return (
    <Router>
        {/* <Nav/> */}
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/login" element={<Login />} />
          <Route path="/destination/signup" element={<Signup />} />
          <Route path="/destination/about" element={<About />} />
          <Route path="/destination/services" element={<Services />} />
          <Route path="/destination/contactus" element={<ContactUs />} />
          <Route path="/destination/booking" element={<Booking />} />
          <Route path="/destination/bookings" element={<Bookings />} />
          <Route path="/destination/airticket" element={<Airticket />} />
          <Route path="/destination/trainticket" element={<Trainticket />} />
          <Route path="/destination/Busticket" element={<Busticket />} />
          <Route path="/destination/cancellations" element={<Cancellations />} />
          <Route path="/destination/dashboard" element={<Dashboard />} />
        </Routes>
       <Footer/> 
      </Router>
  );
}

export default App;
