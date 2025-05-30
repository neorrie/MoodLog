import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import bcrypt from "bcrypt";
import User from "./models/Users.js";
import Journal from "./models/Journal.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

/** -------------------- User Registration -------------------- */
app.post("/users", async (req, res) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already taken" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User successfully created!" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

/** -------------------- User Login -------------------- */
app.post("/users/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
      .lean()
      .exec();
    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication failed: user not found" });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: "Authentication failed: incorrect password" });
    }

    const payload = { username: user.username };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({ accessToken });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

/** -------------------- Get All Journals -------------------- */
app.get("/journals", authenticateToken, async (req, res) => {
  try {
    const journalList = await Journal.find({
      username: req.user.username,
    }).sort({ date: -1 });
    res.status(200).json(journalList);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

/** -------------------- Create New Journal -------------------- */
app.post("/journals", authenticateToken, async (req, res) => {
  try {
    await Journal.create({
      username: req.user.username,
      title: req.body.title,
      date: req.body.date,
      caption: req.body.caption,
    });
    res.status(201).json({ message: "New journal entry created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/** -------------------- Update Journal -------------------- */
app.post("/journals/:id", authenticateToken, async (req, res) => {
  try {
    const { title, caption, date } = req.body;

    const updateResult = await Journal.updateOne(
      { _id: req.params.id },
      { $set: { title, caption, date } }
    );

    if (updateResult.matchedCount === 0) {
      return res.status(404).json({ message: "Journal not found" });
    }

    res.status(200).json({ message: "Journal updated successfully" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

/** -------------------- Delete Journal -------------------- */
app.delete("/journals/:id", authenticateToken, async (req, res) => {
  try {
    const deleted = await Journal.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Journal not found" });
    }
    res.status(200).json({ message: "Journal deleted successfully" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

/** -------------------- Middleware -------------------- */
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).send("You do not have access");
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = payload;
    next();
  });
}

/** -------------------- Start Server -------------------- */
app.listen(8888, () => {
  connectDB();
});
