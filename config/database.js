const Sequelize = require('sequelize')
require('dotenv').config()

const ClientModel = require('../models/client')
const AverageModel = require('../models/average')

const sequelize = new Sequelize(
    process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
})

const Client = ClientModel(sequelize, Sequelize)
const Average = AverageModel(sequelize, Sequelize)

sequelize.sync({
    force: false
}).then(() => {
    console.log('Tablas sincronizadas con MYSQL')
})
module.exports = {
    Client,
    Average
}