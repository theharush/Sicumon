const mongoose = require("mongoose");
const { Schema } = mongoose;

const summerySchema = new Schema({
  title: String,
  body: String,
  date: Date,
  votes: {
    upVotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    downVotes: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  summery: { type: Schema.Types.ObjectId, ref: "Summery" }
});

mongoose.model("summeries", summerySchema);
