const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CountrySchema = new Schema(
  {
    countries: String,
    cityID:{ type: Schema.Types.ObjectId, ref: "City" },
  },

);

module.exports = Country = mongoose.model("Country", CountrySchema);
