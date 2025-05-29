import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
  username: String,
  title: String,
  caption: String,
  date: String,
});

const Journal = mongoose.model("Journal", journalSchema);
export default Journal;
