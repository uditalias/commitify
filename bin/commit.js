const { spawnSync } = require("child_process");

function format(params) {
    return `${params.type}(${params.scope}): ${params.message}`;
}

module.exports = function (params) {
    if (params.gitAdd) {
        spawnSync("git", ["add", "."], { stdio: "inherit" });
    }

    spawnSync("git", ["commit", "-m", format(params)], { stdio: "inherit" });

    if (params.gitPush) {
        spawnSync("git", ["push"], { stdio: "inherit" });
    }
}
