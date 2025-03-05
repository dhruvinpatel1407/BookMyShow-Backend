const express = require("express");
const BookingCollection = require("../models/ShowBookingModel");
const UserCollection = require("../models/userModel");
const { verifyToken } = require("../config/auth");
const chalk = require("chalk");
const router = express.Router();

const {
  createBooking,
  getLastBooking,
  getAllBookings,
} = require("../controllers/bookingController");
// Apply middleware to all booking routes
router.use(verifyToken);


/**
 * @swagger
 * /api/booking:
 *   post:
 *     summary: Create a new booking
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - movie
 *               - seats
 *               - slot
 *             properties:
 *               movie:
 *                 type: string
 *                 description: Name of the movie
 *               seats:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of seat numbers
 *               slot:
 *                 type: string
 *                 description: Time slot of the show
 *     responses:
 *       201:
 *         description: Booking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post("/", createBooking);

/**
 * @swagger
 * /api/booking:
 *   get:
 *     summary: Get last booking for the user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Last booking retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       404:
 *         description: No bookings found
 *       500:
 *         description: Server error
 */
router.get("/", getLastBooking);

/**
 * @swagger
 * /api/booking/all:
 *   get:
 *     summary: Get all bookings for the user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All bookings retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 *       404:
 *         description: No bookings found
 *       500:
 *         description: Server error
 */
router.get("/all", getAllBookings);

module.exports = router;
