const mongoose = require("mongoose");
const reclamationSchema = new mongoose.Schema({
  issueDate: {
    type: String,
    required: true,
  },
  partName: {
    type: String,
    required: true,
  },
  deviceSerialNumber: {
    type: String,
    required: true,
  },

  howMany: {
    type: String,
    required: true,
  },
  lemonSoftIssueNumber: {
    type: String,
    required: true,
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
    required: true,
  },
  whatIsTheCauseR: {
    type: String,
    required: false,
  },
  conclusionR: {
    type: String,
    required: true,
  },
  repairedChangedComponent: {
    type: String,
    required: false,
  },

  userNameR: {
    type: String,
    required: true,
  },
},{
    timestamps:true


});

const reclamation = mongoose.model("reclamation", reclamationSchema);
module.exports = reclamation;
