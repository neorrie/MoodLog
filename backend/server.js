import express from "express";
import { connectDB } from "./config/db.js";

const app = express();
app.use(express.json());

app.listen(3000, () => {
  connectDB();
});

app.get("/", async (req, res) => {
  res.send("this is working");
});

app.post("/register", async (req, res) => {
  const testEntry = req.body;
  console.log(testEntry);
});
