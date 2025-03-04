const mongoose = require("mongoose");
const UserCollection = require("../routes/userRoutes");

const bookingSchema = new mongoose.Schema({
  movie: {
    type: String,
    required: true,
  },
  seats: {
    type: Object,
    required: true,
  },
  slot: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
    required: true,
    properties: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserCollection",
        required: true,
      },
      userName: {
        type: String,
        required: true,
      },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
