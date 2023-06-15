import mongoose from "mongoose";
const RatingSchema = new mongoose.Schema({
    rate: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
})
const productsSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true,
        },
        title: {
            type: String,
            required: true,

        },
        price: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        image: {
            type: String,

        },
        rating: {
            type: RatingSchema,
            default: null
        },
    }
)

const Products = mongoose.model("Products", productsSchema);
export default Products;