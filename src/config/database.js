// config/database.js

const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres://root:VNsQJoiI0qyCtKZozsN33wJgeQI8GNWv@dpg-co2f4kgl6cac73bmk5a0-a.oregon-postgres.render.com/food_shop_4dq1', {
  dialect: 'postgres', // Change dialect to 'postgres' to reflect the database type
  protocol: 'postgres', // Add protocol to specify that it's a PostgreSQL database
  host: 'dpg-co2f4kgl6cac73bmk5a0-a.oregon-postgres.render.com', // Use only the hostname without the protocol and database name
  port: 5432, // Port provided by Render.com
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Necessary when connecting to Render.com PostgreSQL databases with SSL
    },
  },
});

module.exports = db;
