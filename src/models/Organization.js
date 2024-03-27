// models/Organization.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Organization = db.define('organization', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Organization;
