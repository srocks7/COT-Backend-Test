const City= require('../models/cities')

exports.get_city=(req,res)=>{
    City.findOne({ city: 'Karachi' })
    .populate("countryID")
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
}


exports.create_city = (req, res) => {
    console.log("ss", req.body);
  
    const city = new City({
      city:req.body.city
    });
  
    city
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "city created successfully",
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