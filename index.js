
let cachedUIDGenerator = undefined;
let cachedSafeUid = undefined;

function initCache(){
    if(cachedUIDGenerator === undefined){
        cachedUIDGenerator = require("./lib/uidGenerator").createUidGenerator(200, 32);
        let  sfuid = require("./lib/safe-uuid");
        sfuid.init(cachedUIDGenerator);
        cachedSafeUid = sfuid.safe_uuid;
    }
}

module.exports = {
    get generateUid(){
        initCache();
        return cachedUIDGenerator.generateUid;
    },
     safe_uuid: function(){
         initCache();
         return cachedSafeUid();
    }
};

module.exports.OwM = require("./lib/OwM");
module.exports.beesHealer = require("./lib/beesHealer");
module.exports.Queue = require("./lib/Queue");
module.exports.combos = require("./lib/Combos");
module.exports.TaskCounter = require("./lib/TaskCounter");
module.exports.SwarmPacker = require("./lib/SwarmPacker");
module.exports.path = require("./lib/path");
module.exports.createPskConsole = function () {
    return require('./lib/pskconsole');
};

module.exports.pingPongFork = require('./lib/pingpongFork');


module.exports.convertToBuffer = function (uint8array) {
    if ($$.Buffer.isBuffer(uint8array)) {
        return uint8array;
    }
    let buffer;
    if (ArrayBuffer.isView(uint8array)) {
        buffer = $$.Buffer.from(uint8array.buffer)
    } else {
        buffer = $$.Buffer.from(uint8array);
    }
    return buffer;
}
