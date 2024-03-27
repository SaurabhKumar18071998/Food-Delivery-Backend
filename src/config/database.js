// config/database.js

const { Sequelize } = require('sequelize');

const db = new Sequelize('food_shop', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost'
});

module.exports = db;
