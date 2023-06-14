import Products from "../model/Products.js"
export const getAllProducts = async (req, res, next) => {

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
        const { id } = req.params.id;
        const result = await Products.findById(id);
        if (result) {
            res.status(200).send(result);
        }
        else {
            res.status(200).send("product is not available")
        }
    } catch (error) {
        console.log('error', error);
        next(error)
    }

}
export const getProductsByCategory = async (req, res, next) => {
    try {
        const { cat } = req.params.category;
        Products.find({ category: cat })
            .then((results) => {
                res.status(200).send(results);
            })
            .catch((error) => {
                res.status(400).send(error)
            })

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