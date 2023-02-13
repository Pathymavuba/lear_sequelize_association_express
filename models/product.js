const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Product = sequelize.define('product',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:true,
    },
    productName:{
        type:DataTypes.STRING,
        allowNull:true,
    }
},{timestamps:false})


module.exports =Product