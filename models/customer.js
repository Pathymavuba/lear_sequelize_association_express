const sequelize = require('../config/db')
const {DataTypes}=require('sequelize')


const Customer = sequelize.define('customer',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    customerName:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{timestamps:false})


module.exports = Customer