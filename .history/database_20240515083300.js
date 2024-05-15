// database.js
const { Sequelize } = require('sequelize');

// Налаштування підключення до MySQL
const sequelize = new Sequelize('kadry', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
