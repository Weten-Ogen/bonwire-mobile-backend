const getUserById = (req,res) => {
    const {id} = req.params
    res.status(201).json({message: id})

}

const createUser = ( req,res) => {
    const body = req.body
    res.status(201).json({message: body})
}

const deleteUser = (req,res) => {
    const {id} = req.params
    res.status(200).json({message: id})
}


module.exports = {
    getUserById,
    createUser,
    deleteUser
}