const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')
//import User her for reference
const User = require('../models/user')

const Post = sequelize.define('post',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{timestamps:false})

User.hasMany(Post,{
    foreignKey:{
        name:"userId",
        type:DataTypes.INTEGER,
        allowNull:false
    },
    onDelete:'CASCADE'
})
Post.belongsTo(User)

module.exports = Post