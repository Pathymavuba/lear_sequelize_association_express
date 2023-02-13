const {Sequelize} = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME,process.env.ROLE,process.env.PASSWORD,{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate()
.then(()=>console.log("connected to database successfully"))
.catch(err=>console.log(err))

module.exports = sequelize