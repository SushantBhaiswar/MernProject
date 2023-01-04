const express = require("express");
const router = express.Router();

const {
  createproduct,
  getAllProducts,
  updateproduct,
  deleteProduct,
  getOneProduct,
} = require("../controllers/productcontroller");

router.post("/createproduct", createproduct);
router.get("/getallproducts", getAllProducts);
router.get("/getoneproduct/:id", getOneProduct);
router.put("/updateproduct/:id", updateproduct);
router.put("/deleteproduct/:id", deleteProduct);

module.exports = router;
