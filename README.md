# BookMyShow Backend

A RESTful API for managing movie bookings and user authentication. Built with Node.js, Express, and MongoDB.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contact Information](#contact-information)

## Project Overview

This project provides a backend system for managing movie bookings with the following features:

- User registration and login system
- Movie booking management
- Protected routes using JWT authentication
- Data modeling using Mongoose
- Error handling and logging with Chalk

## Features

- **User Authentication:**
  - Registration
  - Login
  - User profile management
- **Movie Booking:**
  - Create new bookings
  - Get last booking
  - Get all bookings
- **Security:**
  - JWT token verification
  - Password hashing using bcryptjs
- **Development Tools:**
  - Environment variable management with dotenv
  - Automatic server restart with nodemon

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ORM
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Dotenv** - Environment variables
- **Chalk** - Logging
- **Nodemon** - Development server

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dhruvinpatel1407/BookMyShow-Backend
   ```

2. **Install dependencies:**
   ```bash
   cd Project
   npm install
   ```

3. **Set up MongoDB:**
   - Make sure MongoDB is installed locally.
   - Create a database named **"movie_booking"**.

4. **Create a `.env` file** in the root directory with the following variables:
   ```env
   PORT=your_port_number
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Start the server:**
   ```bash
   npm run dev
   ```

## API Documentation

### **User Endpoints**

| Method | Endpoint              | Description               |
|--------|----------------------|---------------------------|
| POST   | `/api/users/register` | Register a new user       |
| POST   | `/api/users/login`    | Login existing user       |
| DELETE | `/api/users/:id`      | Delete user               |
| PUT    | `/api/users/:id`      | Update user               |
| GET    | `/api/users/me`       | Get current user profile  |

### **Booking Endpoints**

| Method | Endpoint            | Description        |
|--------|--------------------|--------------------|
| POST   | `/api/booking/`    | Create new booking |
| GET    | `/api/booking/`    | Get last booking   |
| GET    | `/api/booking/all` | Get all bookings   |

## Swagger API Documentation

The API documentation is generated using Swagger UI and can be accessed at the following endpoint:

- **Swagger Link:** `https://bookmyshow-b92t.onrender.com//api-docs`
- **Description:** This endpoint provides an interactive UI where you can:
  - View all API endpoints
  - Test API requests directly in the browser
  - See request/response examples
  - Explore API schemas

To access the Swagger documentation in local System:
1. Start the server using `npm run dev`
2. Navigate to `http://localhost:{your_port}/api-docs` in your browser
3. You'll see the Swagger UI interface where you can interact with the API

The documentation is automatically updated with your routes and schemas, making it a powerful tool for both development and testing.

## Project Structure

```
Project/
├── src/
│   ├── config/        # Configuration files
│   ├── controllers/   # Business logic
│   ├── models/        # Data models
│   ├── routes/        # API routes
│   ├── middleware/    # Authentication middleware
│   ├── swagger.js     # swagger congif file
│   └── server.js      # Main server file
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

---



