const mongoose = require("mongoose");
const reclamationSchema = new mongoose.Schema({
  issueDate: {
    type: String,
    required: false,
  },
  partName: {
    type: String,
    required: false,
  },
  deviceSerialNumber: {
    type: String,
    required: false,
  },

  howMany: {
    type: String,
    required: false,
  },
  lemonSoftIssueNumber: {
    type: String,
    required: false,
  },
  electricalComponentType: {
    type: String,
    required: false,
  },
  mechanicalComponentType: {
    type: String,
    required: false,
  },
  information: {
    type: String,
    required: false,
  },

  causeKnownR: {
    type: String,
    required: false,
  },
  whatIsTheCauseR: {
    type: String,
    required: false,
  },
  conclusionR: {
    type: String,
    required: false,
  },
  repairedChangedComponent: {
    type: String,
    required: false,
  },

  userNameR: {
    type: String,
    required: false,
  },
},{
    timestamps:false


});

const reclamation = mongoose.model("reclamation", reclamationSchema);
module.exports = reclamation;
