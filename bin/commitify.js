const inquirer = require("inquirer");
const setup = require("./setup");
const commit = require("./commit");

inquirer
    .prompt(setup)
    .then(commit);