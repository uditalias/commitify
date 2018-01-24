const { spawnSync } = require("child_process");

function format(params) {
    return `${params.type}(${params.scope}): ${params.message}`;
}

module.exports = function (params) {
    spawnSync("git", ["commit", "-m", format(params)], { stdio: "inherit" });
}