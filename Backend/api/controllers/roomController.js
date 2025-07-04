import room from "../models/room.js";
import hotel from "../models/hotel.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err, "error");
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err); // pass the error to the next middleware
  }
};

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await room.findByIdAndDelete(req.params.id);
    try {
      await hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err, "error");
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err); // pass the error to the next middleware
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const Room = await room.findById(req.params.id);
    res.status(200).json(Room);
  } catch (err) {
    next(err); // pass the error to the next middleware
  }
};

export const getAllRoom = async (req, res, next) => {
  try {
    const Rooms = await room.find();
    res.status(200).json(Rooms);
  } catch (err) {
    next(err); // pass the error to the next middleware
  }
};
