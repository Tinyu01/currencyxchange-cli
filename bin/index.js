#!/usr/bin/env node

const yargs = require('yargs');
const convertCommand = require('../src/commands/convert');
const historyCommand = require('../src/commands/history');

yargs
  .command(convertCommand)
  .command(historyCommand)
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv;