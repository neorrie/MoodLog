import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import bcrypt from "bcrypt";
import User from "./models/Users.js";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(8888, () => {
  connectDB();
});

//test route: return all users
app.get("/", async (req, res) => {
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
  //probably need to write mongoose logic to find a user here based on the input of the user in the login form
  // const user = users.find(...)
  // if (user == null) {
  //   return res.status(400).send("Authentication failed");
  // }
  // try {
  //   bcrypt.compare(req.body.password, user.password);
  // } catch {
  //   res.status(500).send();
  // }
});
