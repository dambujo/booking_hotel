import userService from '../services/userService';

const getAllHotels = (req, res) => {
  const allUsers = userService.getAllUsers();
  res.send('Get all hotels');
};

const getOneHotel = (req, res) => {
  const user = userService.getOneUser();
  res.send('Get an existing hotel');
};

const createNewHotel = (req, res) => {
  const createdNewUser = userService.createNewUser();
  res.send('Create a new hotel');
};

const updateOneHotel = (req, res) => {
  const updatedOneUser = userService.updateOneUser();
  res.send('Update an existing hotel');
};

const deleteOneHotel = (req, res) => {
  const deletedOneUser = userService.deleteOneUser();
  res.send('Delete an existing hotel');
};

export default {
  getAllHotels,
  getOneHotel,
  createNewHotel,
  updateOneHotel,
  deleteOneHotel,
};
