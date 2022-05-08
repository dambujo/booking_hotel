import userService from '../services/userService';

const getAllUsers = (req, res) => {
  const allUsers = userService.getAllUsers();
  res.send('Get all users');
};

const getOneUser = (req, res) => {
  const user = userService.getOneUser();
  res.send('Get an existing user');
};

const createNewUser = (req, res) => {
  const createdNewUser = userService.createNewUser();
  res.send('Create a new user');
};

const updateOneUser = (req, res) => {
  const updatedOneUser = userService.updateOneUser();
  res.send('Update an existing user');
};

const deleteOneUser = (req, res) => {
  const deletedOneUser = userService.deleteOneUser();
  res.send('Delete an existing user');
};

export default {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
