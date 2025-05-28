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

// const getData = async () => {
//   const tempData = [
//     {
//       title: "A Day at the Beach",
//       caption: "It was sunny and relaxing.",
//       date: new Date("2025-05-01"),
//     },
//     {
//       title: "Study Marathon",
//       caption: "Prepared for exams all day.",
//       date: new Date("2025-05-02"),
//     },
//     {
//       title: "Evening Walk",
//       caption: "Watched the sunset by the park.",
//       date: new Date("2025-05-03"),
//     },
//   ];

//   try {
//     for (const entry of tempData) {
//       await Journal.create({
//         username: "gappaneo",
//         title: entry.title,
//         caption: entry.caption,
//         date: entry.date,
//       });
//       console.log(`Journal entry "${entry.title}" created.`);
//     }
//     console.log("All tempData entries have been uploaded.");
//   } catch (error) {
//     console.error("Error uploading tempData:", error);
//   }
// };

//user registration
app.post("/users", async (req, res) => {
  try {
    //incomplete - frontend should refresh and return some kind of popup notification upon failure
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already taken" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(newUser);
    res.status(201).json({ message: "User successfully created!" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

//user login
app.post("/users/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username })
    .lean()
    .exec();
  if (!user) {
    return res.status(400).send("Authentication failed");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const payload = { username: user.username };
      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken: accessToken });
    } else {
      return res
        .status(401)
        .json({ message: "Authentication failed: incorrect password" });
    }
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// to be rendered on dashboard
app.get("/journals", authenticateToken, async (req, res) => {
  try {
    const journalList = await Journal.find({ username: req.user.username });
    res.json(journalList);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// create new journal
app.post("/journals", authenticateToken, async (req, res) => {
  try {
    const newJournal = await Journal.create({
      username: req.user.username,
      title: req.body.title,
      date: req.body.date,
      caption: req.body.caption,
    });
    console.log(newJournal);
    res.status(201).json({ message: "New journal entry created" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).send("You do not have access");
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = payload;
    next();
  });
}

app.listen(8888, () => {
  connectDB();
});
