const {Router} = require('express')
const {
    getProduct,
    getProductById,
    deleteProductbyId,
    createProduct
} = require('../controllers/productController.js')

const router = Router();

router.get("/", getProduct)
router.get("/:id",getProductById)
router.delete("/:id",deleteProductbyId)
router.post('/create',createProduct)
module.exports = router