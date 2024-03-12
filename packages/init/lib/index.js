'use strict';

import Command from '@zimu_test/command';
import { log } from '@zimu_test/utils';

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

export default function Init(instance) {
  return new InitCommand(instance);
}