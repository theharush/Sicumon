const mongoose = require("mongoose");
const { Schema } = mongoose;
const educationSchema = require("./Eduction");

const userSchema = new Schema({
  googleId: String,
  name: {
    givenName: String,
    familyName: String
  },
  email: String,
  profilePicUrl: String,
  gender: String,
  description: String,
  education: [educationSchema],
  summaries: [{ type: Schema.Types.ObjectId, ref: "Summery" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
});

mongoose.model("users", userSchema);
