const { loadRCFile } = require("./utils");
const types = require("./types");
const scopes = require("./scopes");

const rc = loadRCFile();

module.exports = [
    {
        type: "list",
        name: "type",
        message: "Choose commit type:",
        choices: types.concat((rc.types || [])).map((type) => ({ name: `${type.value}: ${type.desc}`, value: type.value }))
    }, {
        type: "list",
        name: "scope",
        message: "Choose commit scope:",
        choices: scopes.concat((rc.scopes || [])).map((scope) => ({ name: scope, value: scope }))
    }, {
        type: "input",
        name: "message",
        message: "Enter commit message:",
        default: "i am too lazy"
    }
];