const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  tag: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("post", PostSchema);
