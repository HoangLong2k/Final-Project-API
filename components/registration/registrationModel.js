const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: [true, "Please provide owner"],
  },
  idNumber: {
    type: String,
    required: [true, "Please provide idNumber"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide phoneNumber"],
  },
  effectiveDate: {
    type: String,
    required: [true, "Please provide effectiveDate"],
  },
  trafficNumber: {
    type: String,
    required: [true, "Please provide trafficNumber"],
  },
  typeOfVehicle: {
    type: String,
    required: [true, "Please provide typeOfVehicle"],
  },
  timeIn: {
    type: String,
    required: [true, "Please provide timeIn"],
  },
  timeOut: {
    type: String,
    required: [true, "Please provide timeOut"],
  },
});

module.exports = mongoose.model("Registration", registrationSchema);
