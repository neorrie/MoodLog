import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import bcrypt from "bcrypt";
import User from "./models/Users.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const testPosts = [
  {
    username: "gappaneo",
    title: "post 1",
  },
  {
    username: "dadoodoo",
    title: "post 2",
  },
  {
    username: "mrmotorboat",
    title: "post 3",
  },
];

//test route: return all users
app.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find({ username: "gappaneo" }).exec();
    res.send(allUsers);
  } catch {
    res.status(500).send();
  }
});

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
    res.status(500).json({ message: "User creation failed!" });
  }
});

//user login
app.post("/users/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username })
    .lean()
    .exec();
  if (user.length === 0) {
    return res.status(400).send("Authentication failed");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      console.log(user);
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken: accessToken });
    } else {
      console.log("You are unauthorized");
      res.send("you fked up the login");
    }
  } catch {
    res.status(500).send();
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).send("You do not have access");
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = user;
    next();
  });
}

app.listen(8888, () => {
  connectDB();
});
