const express = require("express")
const { Router } = express
const router = Router()
const ProductControler = require("../../controllers/productControler")
const productClass = new ProductControler()

router.get("/", productClass.getAll)
router.post("/", productClass.addProduct)

module.exports = router