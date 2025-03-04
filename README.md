# Movie Booking System

A RESTful API for managing movie bookings and user authentication. Built with Node.js, Express, and MongoDB.

## Table of Contents
- [Project Overview]
- [Features]
- [Technologies Used]
- [Installation]
- [API Documentation]
- [Project Structure]
- [Contact Information]

## Project Overview

This project provides a backend system for managing movie bookings with the following features:

- User registration and login system
- Movie booking management
- Protected routes using JWT authentication
- Data modeling using Mongoose
- Error handling and logging with Chalk

## Features

- User authentication:
  - Registration
  - Login
  - User profile management
- Movie booking:
  - Create new bookings
  - Get last booking
  - Get all bookings
- Security:
  - JWT token verification
  - Password hashing using bcryptjs
- Development tools:
  - Environment variable management with dotenv
  - Automatic server restart with nodemon

## Technologies Used

- Node.js - Runtime environment
- Express.js - Web framework
- MongoDB - Database
- Mongoose - ORM
- JWT - Authentication
- Bcryptjs - Password hashing
- Dotenv - Environment variables
- Chalk - Logging
- Nodemon - Development server

## Installation

1. Clone the repository:
```bash
git clone https://github.com/dhruvinpatel1407/BookMyShow-Backend
```

2. Install dependencies:
```bash
cd Project
npm install
```

3. Set up MongoDB:
- Make sure MongoDB is installed locally
- Create a database named "movie_booking

4. Create a .env file in the root directory with the following variables:
```env
PORT=your_port_number
JWT_SECRET=your_jwt_secret_key
```

5. Start the server:
```bash
npm run dev

## API Documentation

### User Endpoints

| Method | Endpoint       | Description                  |
|---------|----------------|------------------------------|
| POST    | /api/users/register | Register a new user         |
| POST    | /api/users/login   | Login existing user         |
| DELETE  | /api/users/:id    | Delete user                 |
| PUT     | /api/users/:id    | Update user                 |
| GET     | /api/users/me    | Get current user profile    |

### Booking Endpoints

| Method | Endpoint           | Description                  |
|---------|--------------------|------------------------------|
| POST    | /api/booking/      | Create new booking           |
| GET     | /api/booking/      | Get last booking             |
| GET     | /api/booking/all   | Get all bookings             |

## Project Structure

```
Project/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/    # Business logic
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   ├── middleware/     # Authentication middleware
│   └── server.js       # Main server file
├── package.json        # Project dependencies
└── README.md           # Project documentation