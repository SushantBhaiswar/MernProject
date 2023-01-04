const productModel = require("../models/productModel");

module.exports = {
  //create product
  createproduct: async (req, res) => {
    const createdproduct = await productModel.create(req.body);
    res.status(201).send({ success: true, createdproduct });
  },

  getAllProducts: async (req, res) => {
    const findproduct = await productModel.find({ isdeleted: false });
    res.status(200).send({ success: true, findproduct });
  },

  getOneProduct: async (req, res) => {
    let product = await productModel.findOne({
      isdeleted: false,
      _id: req.params.id,
    });
    if (!product)
      return res
        .status(404)
        .send({ success: false, message: "product not found" });

    res.status(200).send(product);
  },

  updateproduct: async (req, res) => {
    let product = await productModel.findOne({
      isdeleted: false,
      _id: req.params.id,
    });
    if (!product)
      return res
        .status(404)
        .send({ success: false, message: "product not found" });
    product = await productModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).send({ success: true, product });
  },

  deleteProduct: async (req, res) => {
    let product = await productModel.findOne({
      isdeleted: false,
      _id: req.params.id,
    });
    if (!product)
      return res
        .status(404)
        .send({ success: false, message: "product not found" });

    product = await productModel.findByIdAndUpdate(req.params.id, {
      isdeleted: true,
    });
    res.status(200).send({ msg: "product deleted successfully" });
  },
};
