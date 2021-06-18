const Country = require("../models/countries")


exports.get_Country = (req, res) => {
    Country.find()
      .exec()
      .then((docs) => {
        console.log(docs);
        res.status(200).json(docs);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  };


  exports.create_country = (req, res) => {
    console.log("ss", req.body);
  
    const country = new Country(req.body);
  
    country
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "country created successfully",
          _id: result._id,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  };