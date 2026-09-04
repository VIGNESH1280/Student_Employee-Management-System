import express from "express";
import User from "../models/user.model.js";
import { generateToken } from "../middleware/auth.middleware.js"
import { auth } from "../middleware/auth.middleware.js";
const router = express.Router();

// SignUp  [Create User]
router.post("/register", async (req, res) => {
  const user = req.body;

  try {
    const addedUser = await User.create(req.body);

    const payload = {
      id: addedUser._id,
      email: user.email,
    };

    const token = await generateToken(payload);

    res.status(201).json({
      message: "User registered successfully",
      user: addedUser,
      token: token,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to create user",
      error: err.message,
    });
  }
});





// SignIn [Login User]
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      const isPasswordCorrect = await user.comparePassword(password);
      if (!isPasswordCorrect) {
        res.status(401).json({
          message: "Invalid password",
        });
      } else {
        const payload = {
          id: user._id,
          email: user.email,
        };


        const token = await generateToken(payload);


        res.status(200).json({
          message: "User logged in sucessfully",
          user: user,
          token: token,
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});












//Get user details by ID
router.post("/userdetail", async (req, res) => {
  const { id } = req.body
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});



















//Get all users
router.get("/", (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});



//Update user
router.patch("/:userId", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

//Delete User
router.delete("/:userId", (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

export default router;
