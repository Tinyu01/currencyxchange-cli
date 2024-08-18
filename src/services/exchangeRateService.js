const axios = require('axios');

const API_KEY = process.env.EXCHANGE_RATE_API_KEY;
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

async function getExchangeRates(baseCurrency) {
  const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`);
  return response.data.conversion_rates;
}

async function convertCurrency(from, to, amount) {
  const rates = await getExchangeRates(from);
  return amount * rates[to];
}

module.exports = { getExchangeRates, convertCurrency };