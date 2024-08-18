const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

exports.command = 'history';
exports.desc = 'Show conversion history';
exports.builder = {};
exports.handler = () => {
  const LOG_FILE = path.join(process.cwd(), 'conversion_history.csv');
  
  if (!fs.existsSync(LOG_FILE)) {
    console.log('No conversion history found.');
    return;
  }

  fs.createReadStream(LOG_FILE)
    .pipe(csv())
    .on('data', (row) => {
      console.log(`${row.Date}: ${row.Amount} ${row.From} = ${row.Result} ${row.To}`);
    })
    .on('end', () => {
      console.log('End of conversion history.');
    });
};