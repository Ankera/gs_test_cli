#! /usr/bin/env node

import importLocal from 'import-local';
import { fileURLToPath } from 'node:url';
import entry from '../lib/index.js';

//  dirname-filename-esm

const __filename = fileURLToPath(import.meta.url);

if(importLocal(__filename)){
  console.log('===sss')
} else {
  console.log('本地入口')
  entry(process.argv.slice(2))
}