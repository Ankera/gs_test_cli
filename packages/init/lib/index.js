'use strict';

const Command = require('@zimu_test/command')
const { log } = require('@zimu_test/utils');

class InitCommand extends Command {
  get command() {
    return 'init [name]'
  }

  get description() {
    return 'init project'
  }

  get options() {
    return [
      ["-f, --force", "是否强制更新", false],
      ["-v, --vvvv", "是否强制更新", false],
    ]
  }

  action([name, opts]) {
    log.verbose('init name', name, opts)
  }

  preAction() {
    console.log('==不需要一定实现==')
  }
}

module.exports = function Init(instance) {
  return new InitCommand(instance);
}