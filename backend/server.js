import express from "express";
import { connectDB } from "./config/db.js";

const app = express();
app.use(express.json());

const users = [];

app.listen(8888, () => {
  connectDB();
});

app.get("/users", async (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  const user = req.body;
  console.log(user);
});
