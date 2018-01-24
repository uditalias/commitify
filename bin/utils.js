const { spawnSync } = require("child_process");

const clearNewLineFromBuffer = exports.clearNewLineFromBuffer = function (buffer) {
    return buffer.toString().replace(/\n/g, "");
}

const isGitRepo = exports.isGitRepo = function () {
    return clearNewLineFromBuffer(spawnSync("git", ["remote", '-v'], {
        cwd: process.cwd()
    }).stderr) === "";
}