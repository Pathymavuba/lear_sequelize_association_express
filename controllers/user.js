const User = require('../models/user')

exports.createUser = (req,res)=>{
    const username = req.body.username
    const newUser = new User({username})
    newUser.save()
    .then(user=>res.status(200).json({mssg:"sucess",user:user}))
    .catch(err=>res.status(500).json({err}))
}
exports.getAllUsers = (req,res)=>{
    User.findAll()
    .then(users=>res.status(200).json({message:"success",users:users}))
    .catch(err=>res.status(500).json({message:"error",err:err}))
}