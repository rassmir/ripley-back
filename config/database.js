const Sequelize = require('sequelize')
require('dotenv').config()

const ClientModel = require('../models/clients')
const AverageModel = require('../models/averages')

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