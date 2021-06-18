const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CountrySchema = new Schema(
  {
    countries: [],
  },

);

module.exports = Country = mongoose.model("Country", CountrySchema);
