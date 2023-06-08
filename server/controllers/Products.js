import Products from "../model/Products.js"
export const getAllProducts = (req, res, next) => {

    try {
        const results = Products.find();
        res.status(200).send(results)
    } catch (error) {
        console.log('error', error);
        next(error);
    }

}
export const getProduct = (req, res, next) => {
    try {
        const { id } = req.params.id;
        const result = Products.findById(id);
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
export const getProductsByCatogery = (req, res, next) => {
    try {
        const { cat } = req.params.catogery;
        const results = Products.find({ catogery: cat })
        if (results) {
            res.status(200).send(results);
        }
        else {
            res.status(200).send("Products of this catogery are not available")
        }
    } catch (error) {
        console.log('error', error);
        next(error);
    }

}