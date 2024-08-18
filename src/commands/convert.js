Copyconst { convertCurrency } = require('../services/exchangeRateService');
const { logConversion } = require('../utils/logger');
const { formatCurrency } = require('../utils/formatter');

exports.command = 'convert';
exports.desc = 'Convert currency';
exports.builder = {
  from: { type: 'string', demandOption: true, describe: 'Currency to convert from' },
  to: { type: 'string', demandOption: true, describe: 'Currency to convert to' },
  amount: { type: 'number', demandOption: true, describe: 'Amount to convert' }
};
exports.handler = async (argv) => {
  try {
    const result = await convertCurrency(argv.from, argv.to, argv.amount);
    console.log(`${formatCurrency(argv.amount, argv.from)} = ${formatCurrency(result, argv.to)}`);
    logConversion(argv.from, argv.to, argv.amount, result);
  } catch (error) {
    console.error('Error:', error.message);
  }
};