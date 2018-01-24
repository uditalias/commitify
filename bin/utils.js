const { spawnSync } = require("child_process");
const fse = require("fs-extra");
const path = require("path");

const RC_FILE_NAME = ".commitifyrc"

const clearNewLineFromBuffer = exports.clearNewLineFromBuffer = function (buffer) {
    return buffer.toString().replace(/\n/g, "");
}

const isGitRepo = exports.isGitRepo = function () {
    return clearNewLineFromBuffer(spawnSync("git", ["remote", '-v'], { cwd: process.cwd() }).stderr) === "";
}

const loadRCFile = exports.loadRCFile = function () {
    return fse.readJsonSync(path.resolve(process.cwd(), RC_FILE_NAME), { throws: false }) || {};
}