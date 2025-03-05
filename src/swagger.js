const swaggerJSDoc = require("swagger-jsdoc");
require("dotenv").config();
const swaggerOptions = {
  definition: {
    // <-- This is the missing key
    openapi: "3.0.0",
    info: {
      title: "Movie Booking API",
      description: "API documentation for movie booking system",
      version: "1.0.0",
      contact: {
        name: "API Support",
        email: "contact@moviebooking.com",
      },
    },
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            id: { type: "string", description: "User ID" },
            userName: {
              type: "string",
              description: "Username chosen by the user",
            },
            email: { type: "string", description: "User email address" },
          },
          required: ["userName", "email"],
        },
        Booking: {
          type: "object",
          properties: {
            _id: { type: "string", description: "Booking ID" },
            movie: { type: "string", description: "Name of the movie" },
            seats: {
              type: "array",
              items: { type: "string" },
              description: "Array of seat numbers",
            },
            slot: { type: "string", description: "Time slot of the show" },
            user: { $ref: "#/components/schemas/User" },
          },
          required: ["movie", "seats", "slot"],
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
    servers: [
      {
        url: process.env.BACKEND_URL,
        description: "Production server"
      },
      {
        url: "http://localhost:3000",
        description: "Local Server"
    
      }
    ],
  },
  apis: ["src/routes/**/*.js","src/controllers/*.js"], // Ensure this path is correct
};

const specs = swaggerJSDoc(swaggerOptions);

module.exports = specs;
