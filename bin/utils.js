const { spawnSync } = require("child_process");
const fse = require("fs-extra");
const path = require("path");

const RC_FILE_NAME = exports.RC_FILE_NAME = ".commitifyrc";

const clearNewLineFromBuffer = exports.clearNewLineFromBuffer = function (buffer) {
    return buffer.toString().replace(/\n/g, "");
}

const isGitRepo = exports.isGitRepo = function () {
    return clearNewLineFromBuffer(spawnSync("git", ["remote", '-v'], { cwd: process.cwd() }).stderr) === "";
}

const loadRCFile = exports.loadRCFile = function (rcPath) {
    rcPath = rcPath || path.resolve(process.cwd(), RC_FILE_NAME);
    return fse.readJsonSync(rcPath, { throws: false }) || {};
}

const isDefined = exports.isDefined = function (value) {
    return typeof value !== "undefined";
}

const uniqe = exports.uniqe = function () {
    return Array.prototype
        .concat.apply([], Array.prototype.slice.apply(arguments))
        .filter(isDefined)
        .reduce(function (res, curr) {
            if (res.indexOf(curr) === -1) {
                res.push(curr);
            }
            return res;
        }, []);
}