
const sequelize = require('../database');
const Employee = require('../models/employee');

const calculateAverageSalary = async () => {
  const result = await Employee.findAll({
    attributes: [[sequelize.fn('AVG', sequelize.col('salary')), 'avgSalary']]
  });
  console.log(`Average Salary: ${result[0].get('avgSalary')}`);
};

module.exports = calculateAverageSalary;
