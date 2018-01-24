const { spawnSync } = require("child_process");

module.exports = function (params) {
    spawnSync("git", ["commit", "-m", `${params.type}(${params.scope}): ${params.message}`], { stdio: "inherit" });
}