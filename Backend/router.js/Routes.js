const express = require("express");
const router = express.Router();

const productcontroller = require("../controllers/productcontroller");

router.get("/getproduct", productcontroller.getallproduct);

module.exports = router;
