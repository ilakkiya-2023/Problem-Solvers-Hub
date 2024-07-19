// import User from "../model/User.js";
// import bcrypt from "bcryptjs";

// export const getAllUser = async (req, res, next) => {
//   let users;
//   try {
//     users = await User.find();
//   } catch (err) {
//     return console.log(err);
//   }

//   if (!users) {
//     return res.status(404).json({ message: "No User Found" });
//   }
//   return res.status(200).json({ users });
// };

// export const signUp = async (req, res, next) => {
//   const { name, email, password } = req.body;

//   let existingUser;
//   try {
//     existingUser = await User.findOne({ email });
//   } catch (error) {
//     return console.log(error);
//   }
//   if (existingUser) {
//     return res
//       .status(400)
//       .json({ message: "User Already exists! Login Instead" });
//   }

//   const hashedPassword = bcrypt.hashSync(password);
//   const user = new User({
//     name,
//     email,
//     password: hashedPassword,
//     blogs: [],
//   });

//   try {
//     await user.save();
//   } catch (error) {
//     return console.log(error);
//   }

//   return res.status(201).json({ user });
// };

// export const signIn = async (req, res, next) => {
//   const { email, password } = req.body;

//   let existingUser;
//   try {
//     existingUser = await User.findOne({ email });
//   } catch (error) {
//     return console.log(error);
//   }
//   if (!existingUser) {
//     return res.status(404).json({ message: "User Not Found! Register First" });
//   }

//   const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
//   if (!isPasswordCorrect) {
//     return res.status(400).json({ message: "Incorrect Password!" });
//   }
//   return res
//     .status(200)
//     .json({ message: "Login Successful!!!", user: existingUser });
// };


// controllers/user-controller.js

import User from "../model/User.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({ users });
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ message: "Error fetching users" });
  }
};

export const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).populate("blogs");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user blogs:", error);
    return res.status(500).json({ message: "Error fetching user blogs" });
  }
};

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists! Login instead" });
    }

    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      blogs: [],
    });

    await user.save();
    return res.status(201).json({ user });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Error creating user" });
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found! Register first" });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect password!" });
    }
    return res.status(200).json({ message: "Login successful!", user: existingUser });
  } catch (error) {
    console.error("Error finding user:", error);
    return res.status(500).json({ message: "Error finding user" });
  }
};
