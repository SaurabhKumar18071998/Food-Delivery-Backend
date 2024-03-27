// models/Pricing.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Organization = require('./Organization');
const Item = require('./Item');



const Pricing = db.define('pricing', {
    organization_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Organization,
        key: 'id'
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Item,
        key: 'id'
      }
    },
    zone: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    base_distance_in_km: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    km_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fix_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'pricing',
    timestamps: false // Exclude createdAt and updatedAt columns
  });
  
  module.exports = Pricing;