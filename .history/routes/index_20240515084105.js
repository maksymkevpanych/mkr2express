// routes/index.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const csv = require('csv-parser');
const Employee = require('../models/employee');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), async (req, res) => {
  const filePath = req.file.path;

  const employees = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      employees.push({
        surname: row['Прізвище'],
        department: row['Цех'],
        position: row['Посада'],
        gender: row['Стать'],
        experience: row['Стаж'],
        salary: row['Заробітна плата']
      });
    })
    .on('end', async () => {
      try {
        await Employee.bulkCreate(employees);
        res.send('File successfully processed and data saved to database.');
      } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Error saving data to database.');
      }
    });
});

module.exports = router;
