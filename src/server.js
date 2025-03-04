const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/showBookingRoute");
const dbConnection = require("./config/config");

dbConnection();
const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "x-auth-token"],
    exposedHeaders: ["x-auth-token"],
  })
);
app.use(express.json());

//Protected routes
app.use("/api/users", userRoutes);
app.use("/api/booking", bookingRoutes);

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(chalk.yellow.bold(`Server is running on port ${PORT}`));
});

// Error handling
server.on("error", (error) => {
  console.error(chalk.red.bold("Server error:"), error);
  if (error.code === "EADDRINUSE") {
    console.log(
      chalk.red("Port is already in use. Trying a different port...")
    );
    const newPort = 5001;
    server.close(() => {
      server.listen(newPort, () => {
        console.log(chalk.yellow(`Server restarted on port ${newPort}`));
      });
    });
  }
});
