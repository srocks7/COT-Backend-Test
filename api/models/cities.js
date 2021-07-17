const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CitySchema = new Schema(
  {
    city: String,
    countryID: { type: Schema.Types.ObjectId, ref: "Country" },
  },

);

module.exports = City = mongoose.model("City", CitySchema);
