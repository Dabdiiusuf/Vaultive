require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./User");
// const router = express.Router();
// const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const secretKey = process.env.SECRET_KEY;

// app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// mongoose
//   .connect("mongodb://localhost:27017/user", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Conntected to MongoDB"))
//   .catch((err) => console.log("MongoDB connection error:", err));

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already taken." });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully. " });
  } catch (err) {
    console.log("Registration error:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required!" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: user_id,
      },
      secretKey,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
