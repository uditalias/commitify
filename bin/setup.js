const path = require("path");
const { loadRCFile, uniqe, RC_FILE_NAME } = require("./utils");

const globalRC = loadRCFile(path.resolve(__dirname, "..", RC_FILE_NAME));
const localRC = loadRCFile();

const types = uniqe(globalRC.types, localRC.types);
const scopes = uniqe(globalRC.scopes, localRC.scopes);

module.exports = [
    {
        type: "confirm",
        name: "gitAdd",
        message: "Do you want to add changes before commit (`git add .`)?",
        default: true
    }, {
        type: "list",
        name: "type",
        message: "Choose commit type:",
        choices: types.map((type) => ({ name: type, value: type }))
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
    }, {
        type: "confirm",
        name: "gitPush",
        message: "Do you want to push your commit?",
        default: true
    }
];