import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
  // =========================
  // PERSONAL INFORMATION
  // =========================

  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    minlength: [2, "First name must be at least 2 characters"],
    maxlength: [30, "First name must not exceed 30 characters"],
  },

  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
    minlength: [1, "Last name must be at least 1 character"],
    maxlength: [30, "Last name must not exceed 30 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    unique: true,
    maxlength: [100, "Email must not exceed 100 characters"],
  },

  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
    unique: true,
  },

  dateOfBirth: {
    type: Date,
  },

  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other", "prefer_not_to_say"],
      message: "Invalid gender",
    },
  },
  // =========================
  // AUTHENTICATION
  // =========================

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"],
    maxlength: [128, "Password must not exceed 128 characters"],
  },

  role: {
    type: String,
    required: [true, "Role is required"],
    enum: {
      values: ["admin", "employee", "student"],
      message: "Invalid user role",
    },
    default: "student",
  },

  // =========================
  // ACCOUNT STATUS
  // =========================

  status: {
    type: String,
    enum: {
      values: ["active", "inactive", "suspended"],
      message: "Invalid account status",
    },
    default: "active",
  },
});




userSchema.pre("save", async function () {
  const user = this;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
  } catch (err) {
    console.log(err);
  }
});

userSchema.methods.comparePassword = async function (password) {
  const user = this;
  try {
    const result = await bcrypt.compare(password, user.password)
    return result
  } catch (error) {
    console.log(error)
  }

}



const User = mongoose.model("User", userSchema);
export default User;
