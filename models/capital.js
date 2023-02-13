const sequelize = require('../config/db')
const {DataTypes}=require('sequelize')

const Country = require('./country')

const Capital = sequelize.define('capital',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    capitalTitle:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{timestamps:false})

Country.hasOne(Capital,{
    foreignKey:{
        name:"countryId",
        type:DataTypes.INTEGER,
    }
})
Capital.belongsTo(Country)

module.exports = Capital
