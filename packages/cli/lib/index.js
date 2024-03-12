"use strict";

import { program } from "commander";
import createInitCommand from "@zimu_test/init";
import path from 'node:path';
import semver from "semver";
import { dirname } from 'dirname-filename-esm'
// const chalk from 'chalk');
import { log, isDebug } from "@zimu_test/utils";
import fse from 'fs-extra';

const __dirname = dirname(import.meta);
const pkgPath = path.resolve(__dirname, '../package.json')
const pkg = fse.readJSONSync(pkgPath);

const LOWEST_NODE_VERSION = "17.0.0";

function checkNodeVersion() {
  if (!semver.gte(process.version, LOWEST_NODE_VERSION)) {
    throw new Error(`cli 所需Node最低版本为${LOWEST_NODE_VERSION}`);
  }
}

function preAction() {
  checkNodeVersion();
}

process.on("uncaughtException", (e) => {
  if (isDebug()) {
    console.log(e);
  } else {
    console.log(e.message);
  }
});

export default function (args) {
  log.info("version", pkg.version);
  log.success("开始初始化", pkg.version);
  program
    .name(Object.keys(pkg.bin)[0])
    .usage("<command> [options]")
    .version(pkg.version)
    .hook("preAction", preAction)
    .option("-d, --debug", "是否开启调试模式", false);

  // program
  //   .command('init [name]')
  //   .description('init project')
  //   .option('-f, --force', '是否强制更新', false)
  //   .action((name, opts) => {
  //     console.log('name', name, opts)
  //   })
  createInitCommand(program);

  program.parse(process.argv);
};
