const express = require("express");
const router = express.Router();
const {
  getAllVeg,
  postAllVeg,
  getAllVegLow,
  getAllVegLowFrench,
  getallFrenchAndItalian,
  getallFrenchOrItalian,
} = require("../controllers/restaurantsLogic");

router.route("/veg/restaurants").get(getAllVeg).post(postAllVeg);
router.route("/veg/low/restaurants").get(getAllVegLow);
router.route("/veg/low/french/restaurants").get(getAllVegLowFrench);
router.route("/french/italian/restaurants").get(getallFrenchAndItalian);
router.route("/restaurants").get(getallFrenchOrItalian);
module.exports = router;
