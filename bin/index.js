#!/usr/bin/env node

const chalk = require("chalk");
const { isGitRepo } = require("./utils");

if (!isGitRepo()) {
    console.log(chalk.red("ERROR: not a git repo."));
    process.exit(1);
}

require("./commitify");