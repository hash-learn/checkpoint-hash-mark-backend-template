import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
    {
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
        // image:{
        //     type: String,
        //     required: true,
        // },
        // rating:{
        //     type: String,
        //     required: true,
        // },
    }
)

const Products = mongoose.model("Products", productsSchema);
export default Products;