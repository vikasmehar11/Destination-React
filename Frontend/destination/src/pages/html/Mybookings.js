import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const userEmail = Cookies.get("userEmail") || sessionStorage.getItem("userEmail");

  useEffect(() => {
    if (!userEmail) {
      console.warn("No user email found.");
      setError("You are not logged in.");
      setLoading(false);
      return;
    }

    const apiUrl = `/destination/booking?email=${encodeURIComponent(userEmail)}`;
    console.log("Fetching from:", apiUrl);

    axios
      .get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("authToken")}`,
        },
      })
      .then((response) => {
        console.log("API Response:", response.data);

        const userBookings = response.data.filter(
          (b) => b.email.toLowerCase().trim() === userEmail.toLowerCase().trim()
        );

        if (userBookings.length > 0) {
          setBookings(userBookings);
        } else {
          setError("No bookings found.");
        }
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setError("Failed to fetch bookings.");
      })
      .finally(() => setLoading(false));
  }, [userEmail]);

  const handleCancel = async (bookingId) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmCancel) return;

    try {
      console.log(`Canceling booking: ${bookingId}`);
      const response = await axios.delete(`/destination/booking/${bookingId}`);

      console.log("Cancel response:", response.data);

      if (response.status === 200 && (response.data.status || response.data.message.includes("deleted"))) {
        setBookings(bookings.filter((booking) => booking._id !== bookingId));
      } else {
        alert("Failed to cancel booking: " + response.data.message);
      }
    } catch (error) {
      console.error("Error canceling booking:", error);
      alert("An error occurred while canceling the booking.");
    }
  };

  return (
    <div style={mainContainerStyle}>
      <div>
        <img
          src="/images/banner.jpg"
          className="img-fluid"
          alt="..."
          style={{ height: "10em", width: "100%", position: "fixed", zIndex: 1 }}
        />
      </div>

      <div>
        <h1
          align="center"
          style={{
            color: "wheat",
            position: "fixed",
            marginTop: "2%",
            marginLeft: "56%",
            zIndex: 2,
            fontFamily: '"Brush Script MT", cursive',
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Destination Tours And Travels
        </h1>
      </div>

      <div style={{ padding: "5%", paddingTop: "12%" }}>
        {loading ? (
          <p>Loading bookings...</p>
        ) : error ? (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        ) : bookings.length > 0 ? (
          <>
            <h2 style={{ marginTop: "3%" }}>Manage Bookings</h2>
            <table className="table table-bordered" style={tableStyle}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Destination</th>
                  <th style={tableHeaderStyle}>Date</th>
                  <th style={tableHeaderStyle}>Duration</th>
                  <th style={tableHeaderStyle}>Persons</th>
                  <th style={tableHeaderStyle}>Price</th>
                  <th style={tableHeaderStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td style={tableCellStyle}>{booking.location}</td>
                    <td style={tableCellStyle}>{new Date(booking.date).toLocaleDateString()}</td>
                    <td style={tableCellStyle}>{booking.duration} days</td>
                    <td style={tableCellStyle}>{booking.persons}</td>
                    <td style={tableCellStyle}>${booking.price}</td>
                    <td style={tableCellStyle}>
                      <button className="btn btn-danger btn-sm" onClick={() => handleCancel(booking._id)}>
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p style={{ color: "red", textAlign: "center" }}>No bookings found.</p>
        )}
      </div>
    </div>
  );
};

const mainContainerStyle = {
  height: "90vh",
};

const tableStyle = {
  width: "100%",
  marginTop: "3%",
  borderSpacing: "0",
  borderCollapse: "collapse",
};

const tableCellStyle = {
  padding: "10px 20px",
  textAlign: "center",
  backgroundColor: "#ffffff",
  border: "1px solid #ddd",
};

const tableHeaderStyle = {
  textAlign: "center",
  padding: "10px 20px",
  backgroundColor: "#f0f0f0",
  border: "1px solid #ddd",
};

export default Bookings;
