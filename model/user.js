const Sequilize = require('sequelize')
const connection = require('../Utilities/dbConnect')

const User = connection.define('user', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: Sequilize.STRING,
        unique: false,
    },
    password: {
        type: Sequilize.STRING,
        allowNull: false
    },
})
module.exports = User