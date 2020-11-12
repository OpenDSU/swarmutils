module.exports.OwM = require("./lib/OwM");
module.exports.beesHealer = require("./lib/beesHealer");

const uidGenerator = require("./lib/uidGenerator").createUidGenerator(200, 32);

module.exports.safe_uuid = require("./lib/safe-uuid").init(uidGenerator);

module.exports.Queue = require("./lib/Queue");
module.exports.combos = require("./lib/Combos");

module.exports.uidGenerator = uidGenerator;
module.exports.generateUid = uidGenerator.generateUid;
module.exports.TaskCounter = require("./lib/TaskCounter");
module.exports.SwarmPacker = require("./lib/SwarmPacker");
module.exports.path = require("./lib/path");
module.exports.createPskConsole = function () {
    return require('./lib/pskconsole');
};

module.exports.pingPongFork = require('./lib/pingpongFork');


if (typeof global.$$ == "undefined") {
    global.$$ = {};
}

if (typeof global.$$.uidGenerator == "undefined") {
    $$.uidGenerator = module.exports.safe_uuid;
}

module.exports.convertToBuffer = function (uint8array) {
    let buffer;
    if (ArrayBuffer.isView(uint8array)) {
        buffer = Buffer.from(uint8array.buffer)
    } else {
        buffer = Buffer.from(uint8array);
    }

    return buffer;
}
