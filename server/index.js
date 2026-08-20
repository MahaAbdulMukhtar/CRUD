const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const UserModel = require("./models/Users");

const app = express();

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error("MONGODB_URI is not configured");
}

// MongoDb Connection

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  console.log("Attempting MongoDB connection...");

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    console.error(error);
    throw error;
  }
}

// Test Route
app.get("/", async (req, res) => {
  try {
    await connectDB();

    const users = await UserModel.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
});

// Get User
app.get("/getUser/:id", async (req, res) => {
  try {
    await connectDB();

    const user = await UserModel.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get user",
      error: error.message,
    });
  }
});

// Update User
app.put("/updateUser/:id", async (req, res) => {
  try {
    await connectDB();

    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
      },
      { new: true },
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user",
      error: error.message,
    });
  }
});

// Delete User
app.delete("/deleteUser/:id", async (req, res) => {
  try {
    await connectDB();

    const user = await UserModel.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete user",
      error: error.message,
    });
  }
});

// Create User
app.post("/createUser", async (req, res) => {
  try {
    await connectDB();

    const user = await UserModel.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
});

// Local Development only
if (require.main === module) {
  const PORT = process.env.PORT || 3001;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
