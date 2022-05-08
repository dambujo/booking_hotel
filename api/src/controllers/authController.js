import authService from '../services/authServices';

const signIn = (req, res) => {
  const signedIn = authService.signIn();
  res.send(`<h2>Signed Sucessfull</h2>`);
};

const changePassword = (req, res) => {
  const changedPassword = authService.changePassword();
  res.send(`<h2>Password changed</h2>`);
};

export default { signIn, changePassword };
