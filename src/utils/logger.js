const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(process.cwd(), 'conversion_history.csv');

function logConversion(from, to, amount, result) {
  const logEntry = `${new Date().toISOString()},${from},${to},${amount},${result}\n`;
  fs.appendFileSync(LOG_FILE, logEntry);
}

module.exports = { logConversion };