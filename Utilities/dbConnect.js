const Sequelize = require('sequelize')
const sequelize=new Sequelize('user','root','edeist.58',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize