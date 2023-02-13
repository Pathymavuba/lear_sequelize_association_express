const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{timestamps:false})

module.exports = User