const mongoose = require("mongoose");

const submittedSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  idNumber: {
    type: String,
    required: true,
  },
  effectDate: {
    type: String,
    required: true,
  },
  trafficNumber: {
    type: String,
    required: true,
  },
  timeIn: {
    type: String,
    required: true,
  },
  timeOut: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Submitted", submittedSchema);
