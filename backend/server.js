import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

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
