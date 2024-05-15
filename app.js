
const express = require('express');
const sequelize = require('./database');
const routes = require('./routes');
const calculateAverageSalary = require('./backgroundTasks/calculateAvgSalary');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

setInterval(calculateAverageSalary, 60000); 
