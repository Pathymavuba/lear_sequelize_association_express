const sequelize = require('../config/db')
const {DataTypes}=require('sequelize')


const Country = sequelize.define('country',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    countryName:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{timestamps:false})


module.exports = Country