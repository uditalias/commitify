const { spawnSync } = require("child_process");

function format(params) {
    return `${params.type}(${params.scope}): ${params.message}`;
}

module.exports = function (params) {
    spawnSync("git", ["commit", `-${params.addFlag ? "a" : ""}m`, format(params)], { stdio: "inherit" });

    if (params.gitPush) {
        spawnSync("git", ["push"], { stdio: "inherit" });
    }
}
