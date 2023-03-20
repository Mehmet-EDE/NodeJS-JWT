const Sequelize = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize('user', 'root', process.env.DB_KEY, {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize