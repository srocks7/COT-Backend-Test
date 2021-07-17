const express = require("express");
const router = express.Router();
const cityController = require("../controllers/cities");


router.get("/all", cityController.get_city);
router.post("/add", cityController.create_city);



module.exports = router;
