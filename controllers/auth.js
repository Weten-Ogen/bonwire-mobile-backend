import asyncHander from 'express-async-handler'

const register  = asyncHander(async(req,res) => {
    res.send('this is the auth')
})


export  {
    register
}