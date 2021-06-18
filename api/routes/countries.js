const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countries");


router.get("/all", countryController.get_Country);
router.post("/add", countryController.create_country);



module.exports = router;
