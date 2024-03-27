// models/Item.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Item = db.define('item', {
  type: {
    type: DataTypes.ENUM('perishable', 'non-perishable'),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Item;
