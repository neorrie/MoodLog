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

const users = [{ username: "test", password: "1234" }];
//test route: return all users
app.get("/users", async (req, res) => {
  // res.send(users);
  try {
    const allUsers = await User.find({});
    res.send(allUsers);
  } catch {
    res.status(500).send();
  }
});

//user registration
app.post("/users", async (req, res) => {
  // const user = req.body;
  // console.log(user);
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(newUser);
    res.status(201).send();
  } catch {
    res.status(500).send();
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
