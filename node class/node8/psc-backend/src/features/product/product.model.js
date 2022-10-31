const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        requird: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        min: 1,
        required: true,
    },
    quantity: {
        type: Number,
        min: 0,
        max: 1000,
        requird: true,
    }
},
    {
        versionKey: false,
        timestamps: true,
    }
);
const Product = mongoose.model("product", productSchema);
module.exports = Product;