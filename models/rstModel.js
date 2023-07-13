const mongoose = require("mongoose");

const restaurant = mongoose.Schema(
  {
    restaurant_id: {
      type: String,
    },
    restaurant_name: {
      type: String,
    },
    restaurant: {
      type: String,
    },
    vegOnly: {
      type: Boolean,
    },
    cost: {
      type: String,
    },
    cusineTypes: {
      type: [String],
    },

    isOpen: {
      type: Boolean,
    },
  },
  {
    timestamps: true, // Disables automatic createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Restaurant", restaurant);
