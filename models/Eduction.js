const mongoose = require("mongoose");
const { Schema } = mongoose;

const educationSchema = new Schema({
  institution: String,
  faculty: String,
  subject: String,
  isCurrent: Boolean
});

module.exports = educationSchema;
