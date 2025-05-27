import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
  username: String,
  title: String,
  caption: String,
  imgURL: String,
  date: Date,
});

const Journal = mongoose.model("Journal", journalSchema);
export default Journal;
