import Product from "../models/porductModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        return res.json(products)
    } catch (e) {
        res.json({message: e.message})
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findAll({where: {idproducts: req.params.id}})
        res.json(product[0])
    } catch (e) {
        res.json({message: e.message})
    }
}

export const createProduct = async (req, res) => {
    try {
        await Product.create(req.body)
        res.json({message: "Product created"})
    } catch (e) {
        res.json({message: e.message})
    }
}

export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                idproducts: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                idproducts: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({message: error.message});
    }
}