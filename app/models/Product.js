import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        default: "N/A"
    },
    category: {
        type: String,
        default: "N/A"
    },
    color: {
        type: String,
        required: true,
    },
    shipping: {
        type: String,
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
}, {
    timestamps: true
});


const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;