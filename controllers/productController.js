

const getProduct = ((req,res) => {
    res.status(200).json({message: "this is final"})
})

const getProductById = ((req,res) =>{
    res.json({message: `get product with id ${req.params.id}`})
})
const deleteProductbyId= ((req,res) => {
    res.json({message: `delete data by ${req.params.id}`})
}) 
const createProduct = (async(req,res) => {
    const body = await req.body
    res.json({message: body})
})


module.exports = {
    getProduct,
    getProductById,
    deleteProductbyId,
    createProduct
}