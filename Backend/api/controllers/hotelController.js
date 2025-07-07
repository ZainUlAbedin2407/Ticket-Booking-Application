import hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    // res.status(500).json(err);   manual error handling
    next(err); // pass the error to the next middleware
  }
};

export const updateAllHotels = async (req, res, next) => {
  try {
    const updateData = req.body;

    const result = await hotel.updateMany({}, { $set: updateData });

    res.status(200).json({
      message: "All hotels updated successfully.",
      modifiedCount: result.modifiedCount,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    // res.status(500).json(err);   manual error handling
    next(err); // pass the error to the next middleware
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const Hotel = await hotel.findById(req.params.id);
    res.status(200).json(Hotel);
  } catch (err) {
    // res.status(500).json(err);   manual error handling
    next(err); // pass the error to the next middleware
  }
};

export const getAllHotel = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;

  const minPrice = parseInt(min) || 1;
  const maxPrice = parseInt(max) || 9999999;
  const limitNum = parseInt(limit) || 4;

  const obj = { ...others };
  const cheapestPrice = { $gt: minPrice, $lt: maxPrice };
  if (min || max) obj.cheapestPrice = cheapestPrice;

  try {
    const hotels = await hotel.find(obj).limit(limitNum);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    // res.status(500).json(err);   manual error handling
    next(err); // pass the error to the next middleware
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await hotel.countDocuments({ type: "Hotel" });
    const apartmentCount = await hotel.countDocuments({ type: "apartment" });
    const resortCount = await hotel.countDocuments({ type: "resort" });
    const villaCount = await hotel.countDocuments({ type: "villa" });
    const cabinCount = await hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      {
        type: "hotel",
        count: hotelCount,
      },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const Hotel = await hotel.findById(req.params.id);
    const list = await Promise.all(
      Hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
