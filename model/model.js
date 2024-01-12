const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  name: String,
  description:String
});
module.exports = mongoose.model("App", AppSchema);
