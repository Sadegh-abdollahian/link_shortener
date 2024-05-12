import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    immutable: true,
  },
  originalLink: {
    type: String,
    required: true,
    immutable: true,
  },
  shortLink: {
    type: String,
    required: true,
    immutable: true,
  },
  // availableClicks is for later ...
  availableClicks: {
    type: Number,
    required: true,
    default: 5000,
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.models.Link || mongoose.model("Link", linkSchema);
