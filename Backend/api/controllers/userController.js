import user from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = awaitUser.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    // res.status(500).json(err);   manual error handling
    next(err); // pass the error to the next middleware
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    // res.status(500).json(err);   manual error handling
    next(err); // pass the error to the next middleware
  }
};

export const getUser = async (req, res, next) => {
  try {
    const User = await user.findById(req.params.id);
    res.status(200).json(User);
  } catch (err) {
    // res.status(500).json(err);   manual error handling
    next(err); // pass the error to the next middleware
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const Users = await user.find();
    res.status(200).json(Users);
  } catch (err) {
    // res.status(500).json(err);   manual error handling
    next(err); // pass the error to the next middleware
  }
};
