const UserModel = require("../users/usersModel");
const registerModel = require("./registrationModel");

module.exports = {
  saveData: async (req, res) => {
    const userCurrent = await UserModel.findOne({
      username: req.body.username,
    });

    const dataSubmitted = new registerModel({
      idNumber: req.body.idNumber,
      owner: req.body.owner,
      phoneNumber: req.body.phoneNumber,
      dob: req.body.dob,
      effectiveDate: req.body.effectiveDate,
      timeIn: req.body.timeIn,
      timeOut: req.body.timeOut,
      typeOfVehicle: req.body.typeOfVehicle,
      trafficNumber: req.body.trafficNumber,
    });
    userCurrent.dataSubmitted = dataSubmitted;
    try {
      await dataSubmitted.save();
      await userCurrent.save();
      res.status(200).json({ message: "Success", statusCode: "200" });
    } catch (err) {
      res.status(500);
      res.render("error", { error: err });
    }
  },
};
