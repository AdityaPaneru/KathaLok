const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    ageGroup: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Story",
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
