const fs = require("fs");
const removeDir = (...args) => {
    if (typeof fs.rm !== "function") {
        return fs.rmdir(...args);
    }
    return fs.rm(...args);
}

const removeDirSync = (...args) => {
    if (typeof fs.rmSync !== "function") {
        return fs.rmdirSync(...args);
    }
    return fs.rmSync(...args);
}

module.exports = {
    removeDirSync,
    removeDir
}