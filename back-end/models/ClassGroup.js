const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({
  section: { type: String, default: "" },
  boys: { type: Number, default: 0 },
  girls: { type: Number, default: 0 },
});

const ClassGroupSchema = new mongoose.Schema({
  serialNo: { type: Number, required: true },
  className: { type: String, default: "" },
  sections: [SectionSchema],
});

module.exports = mongoose.model("ClassGroup", ClassGroupSchema);
