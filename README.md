
🌍 Destination Tours And Travels

Destination Tours and Travels is a modern, web application designed for users to explore and manage travel destinations. The project follows a full-stack architecture, with a React.js frontend, a Node.js & Express backend, and MongoDB Atlas as the database.

🚀 Live Demo

🔗 Frontend (Vercel): destination-react-frontend.vercel.app

📌 Table of Contents
	•	✨ Features
	•	🛠 Tech Stack
	•	⚙️ Installation
	•	🔑 Environment Variables
	•	📂 Project Structure
	•	🚀 Deployment

✨ Features

✅ Explore a curated list of travel destinations
✅ View detailed information about each destination
✅ Add new destinations and delete existing ones
✅ RESTful API with secure backend architecture

🛠 Tech Stack

Frontend:
	•	React.js (Component-based UI)
	•	React Router (Client-side navigation)

Backend:
	•	Node.js (Server-side JavaScript runtime)
	•	Express.js (Minimalist web framework)
	•	MongoDB Atlas (Cloud-based NoSQL database)
	•	Mongoose (ODM for MongoDB)

Hosting & Deployment:
	•	Frontend: Vercel
	•	Backend: Render
	•	Database: MongoDB Atlas

⚙️ Installation

1. Clone the Repository

git clone https://github.com/vikasmehar11/Destination-React.git
cd Destination-React

2. Install Backend Dependencies

npm install

3. Set Up Environment Variables

Create a .env file in the backend directory and configure the following:

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

4. Start the Backend Server

npm start

5. Set Up and Run the Frontend

cd client
npm install
npm start

The application will be available at http://localhost:3000.

🔑 Environment Variables

Variable	Description
MONGO_URI	MongoDB Atlas connection string
PORT	Port number for the backend (default: 5000)

📂 Project Structure

Destination-React/
│-- backend/              # Backend files (Node.js, Express)
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   ├── server.js         # Main server file
│   ├── .env              # Environment variables
│-- frontend/             # React frontend
│   ├── src/              # React components
│   ├── public/           # Static assets
│   ├── App.js            # Main App component
│-- package.json          # Dependencies and scripts
│-- README.md             # Documentation

🚀 Deployment

Frontend
	•	Hosted on Vercel: View Live

Backend
	•	Hosted on Render

Database
	•	MongoDB Atlas (Cloud-based NoSQL database)
