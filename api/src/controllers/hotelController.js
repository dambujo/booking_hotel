import userService from '../services/userService';
import Hotel from '../models/Hotel';

const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find(req.params.id);
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getOneHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createNewHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteOneHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json('Hotel has been deleted');
  } catch (error) {
    res.status(500).json(error);
  }
};

export default {
  getAllHotels,
  getOneHotel,
  createNewHotel,
  updateHotel,
  deleteOneHotel,
};
