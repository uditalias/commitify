const inquirer = require("inquirer");
const types = require("./types");
const scopes = require("./scopes");
const commit = require("./commit");

inquirer.prompt([
    {
        type: "list",
        name: "type",
        message: "Choose commit type:",
        choices: types.map((type) => ({ name: `${type.value}: ${type.desc}`, value: type.value }))
    }, {
        type: "list",
        name: "scope",
        message: "Choose commit scope:",
        choices: scopes.map((scope) => ({ name: scope, value: scope }))
    }, {
        type: "input",
        name: "message",
        message: "Enter commit message:",
        default: "i am too lazy"
    }
]).then(commit);