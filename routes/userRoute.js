const { Router} = require('express');
const {getUserById,
    createUser,
    deleteUser
} = require('../controllers/usercontroller.js')

const router =  Router();

router.get('/:id', getUserById)
router.post('/create', createUser)
router.delete('/delete/:id',deleteUser )

module.exports = router