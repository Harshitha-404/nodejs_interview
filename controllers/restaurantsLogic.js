const asyncHandler = require("express-async-handler");
const Restaurant = require("../models/rstModel");

// Get all veg restaurant
const getAllVeg = asyncHandler(async (req, res) => {
  try {
    const data = await Restaurant.find({ vegOnly: true });
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
});

const postAllVeg = asyncHandler(async (req, res) => {
  try {
    const data = await Restaurant.create(req.body);
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
});
//Get all veg restaurant that have low cost
const getAllVegLow = asyncHandler(async (req, res) => {
  try {
    const data = await Restaurant.find({ vegOnly: true, cost: "low" });
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
});

//Get all veg restaurant that have low cost and have cuisines “french”
const getAllVegLowFrench = asyncHandler(async (req, res) => {
  try {
    const data = await Restaurant.find({});
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].cusineTypes.includes("french")) {
        arr.push(data[i]);
      }
    }
    res.status(200).json({ french_cuisine: arr });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
});

//Get all restaurant that have (high or low) cost and have cuisines “french” and “italian”
const getallFrenchAndItalian = asyncHandler(async (req, res) => {
  try {
    const data = await Restaurant.find({});

    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (
        (data[i].cusineTypes.includes("french") &&
          data[i].cusineTypes.includes("italian")) ||
        data[i].cost == "low" ||
        data[i].cost == "high"
      ) {
        arr.push(data[i]);
      }
    }
    res.status(200).json({ FrenchAndItalian_cuisine: arr });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
});

//Get all restaurant that have (high or low) cost and have cuisines “french” or “italian”
const getallFrenchOrItalian = asyncHandler(async (req, res) => {
  try {
    const data = await Restaurant.find({});

    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].cusineTypes.includes("french") ||
        data[i].cusineTypes.includes("italian") ||
        data[i].cost == "low" ||
        data[i].cost == "high"
      ) {
        arr.push(data[i]);
      }
    }
    res.status(200).json({ FrenchOrItalian_cuisine: arr });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
});

module.exports = {
  getAllVeg,
  postAllVeg,
  getAllVegLow,
  getAllVegLowFrench,
  getallFrenchAndItalian,
  getallFrenchOrItalian,
};
