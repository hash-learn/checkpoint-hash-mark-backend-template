import Products from "../model/Products.js"
export const getAllProducts = async (req, res, next) => {

    console.log('getAllProducts contoller');
    try {
        const results = await Products.find();
        res.status(200).send(results)
    } catch (error) {
        console.log('error', error);
        next(error);
    }

}
export const getProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Products.findById(id);
        if (result) {
            console.log('getProduct contoller');
            res.status(200).send(result);
        }
        else {
            res.status(200).send("product is not available")
        }
    } catch (error) {
        console.log('error in getProduct', error);
        res.status(500).send("error in getProduct controller")
        next(error)
    }

}
export const getProductsByCategory = async (req, res, next) => {
    try {
        const { cat } = req.params.category;
        const res = await Products.find({ category: cat })
        res.send(res).status(200);

    } catch (error) {
        console.log('error', error);
        next(error);
    }

}
export const createProducts = async (req, res, next) => {
    try {
        const product = new Products(req.body);
        await product.save();
        res.status(200).send(product);
    } catch (error) {
        console.log(error);
        next(error);
    }
}