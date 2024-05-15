
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('kadry', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
