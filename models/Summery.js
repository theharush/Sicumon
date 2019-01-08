const mongoose = require("mongoose");
const { Schema } = mongoose;

const summerySchema = new Schema({
  title: String,
  description: String,
  subject: String,
  date: Date,
  images: [String],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  votes: {
    upVotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    downVotes: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  author: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("summeries", summerySchema);
