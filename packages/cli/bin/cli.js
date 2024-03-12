#! /usr/bin/env node

const importLocal = require('import-local');
const npmlog = require('npmlog');
const entry = require('../lib/index')


if(importLocal(__filename)){
  console.log('===sss')
} else {
  console.log('本地入口')
  entry(process.argv.slice(2))
}