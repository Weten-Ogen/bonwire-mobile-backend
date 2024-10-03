const asyncHandler = require('express-async-handler')


const getUserById = asyncHandler(async(req,res) => {
    const {id} = req.params
    res.status(201).json({message: id})

})

const createUser = asyncHandler(( req,res) => {
    const body = req.body
    res.status(201).json({message: body})
})

const deleteUser = asyncHandler(async(req,res) => {
    const {id} = req.params
    res.status(200).json({message: id})
}
)

module.exports = {
    getUserById,
    createUser,
    deleteUser
}