const sequelize = require('../config/db')
const {DataTypes}=require('sequelize')
//import Customer for etablishing relationship
const Customer = require('../models/customer')
//import Product for etablishing relationship
const Product = require('../models/product')

const Customerproduct = sequelize.define('customerproduct',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    }
},{timestamps:false})

Customer.belongsToMany(Product,{
    through:Customerproduct,
    foreignKey:{
        name:"customerId",
        type:DataTypes.INTEGER,
    }})
Product.belongsToMany(Customer,{
    through:Customerproduct,
    foreignKey:{
        name:"productId",
        type:DataTypes.INTEGER,
    }})


 module.exports = Customerproduct