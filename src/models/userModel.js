//User Schema for mongoDb Database
const mongoose = require("mongoose");
const BookingCollection = require("../models/ShowBookingModel");
// To Encrypt Password
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    validate: [
      {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Please enter a valid email address",
      },
    ],
  },
  passWord: {
    type: String,
    required: true,
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("passWord") || this.isNew) {
    this.passWord = await bcrypt.hash(this.passWord, 10);
    // console.log('Hashed Password:', this.passWord);
  }
  next();
});

// Middleware to delete user's bookings before deleting the user
userSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    try {
      const userIdStr = this._id.toString();
      // Delete all bookings for this user
      await BookingCollection.deleteMany({ "user.userId": userIdStr });
      next();
    } catch (err) {
      next(err);
    }
  }
);

const UserCollection = mongoose.model("UserCollection", userSchema);

module.exports = UserCollection;
