const Registration = require("../registration/registrationModel");
const UserModel = require("../users/usersModel");

module.exports = {
  getData: async (req, res) => {
    const userCurrent = await UserModel.findOne({
      username: req.body.username,
    });
    try {
      res.json(userCurrent.dataSubmitted);
    } catch (err) {
      res.json({ message: err });
    }
  },

  getDataAdmin: async (req, res) => {
    try {
    } catch {}
  },
};
