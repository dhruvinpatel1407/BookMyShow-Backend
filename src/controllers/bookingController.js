const BookingCollection = require("../models/ShowBookingModel");
const UserCollection = require("../models/userModel");
const chalk = require("chalk");

/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Booking ID
 *         movie:
 *           type: string
 *           description: Name of the movie
 *         seats:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of seat numbers
 *         slot:
 *           type: string
 *           description: Time slot of the show
 *         user:
 *           $ref: '#/components/schemas/User'
 *       required:
 *         - movie
 *         - seats
 *         - slot
 */


const createBooking = async (req, res) => {
  try {
    const { movie, seats, slot } = req.body;

    // Get authenticated user
    const user = await UserCollection.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const booking = new BookingCollection({
      movie,
      seats,
      slot,
      user: {
        userId: req.user.userId,
        userName: user.userName, // Use userName if available, else email
      },
    });

    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    console.error(chalk.red.bold("Error in booking: "), err);
    res.status(500).json({ error: "Booking failed" });
  }
};

const getLastBooking = async (req, res) => {
  try {
    // Get authenticated user
    const user = await UserCollection.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find last booking for the user
    const lastBooking = await BookingCollection.findOne({
      "user.userId": req.user.userId,
    }).sort({ _id: -1 }); // Sort by _id descending to get the latest

    if (!lastBooking) {
      return res.status(200).json({ message: "No previous booking found" });
    }

    res.status(200).json(lastBooking);
  } catch (err) {
    console.error(chalk.red.bold("Error in getting last booking: "), err);
    res.status(500).json({ error: "Failed to retrieve booking" });
  }
};

const getAllBookings = async (req, res) => {
  try {
    // Get authenticated user
    const user = await UserCollection.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find all bookings for the user
    const allBookings = await BookingCollection.find({
      "user.userId": req.user.userId,
    }).sort({ _id: -1 }); // Sort by _id descending (newest first)

    if (allBookings.length === 0) {
      return res.status(200).json({ message: "No bookings found" });
    }

    res.status(200).json(allBookings);
  } catch (err) {
    console.error(chalk.red.bold("Error in getting all bookings: "), err);
    res.status(500).json({ error: "Failed to retrieve bookings" });
  }
};

module.exports = {
  createBooking,
  getLastBooking,
  getAllBookings,
};
