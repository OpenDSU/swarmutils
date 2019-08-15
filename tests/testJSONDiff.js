
let obj1 = {
    propNum:100,
    propStr:"string 100",
    propArr:[1, "100"],
    propObj:{
        propNum:101,
        propStr:"string 101",
        redundantPropStr:"string 101",
        propArr:[1, "100", {
            propNum:102,
            propStr:"string 103",
        }],
    }
}

let obj2 =  JSON.parse(JSON.stringify(obj1));

obj2.newNum = 1001;
obj2.newProp = 1002;
obj2.propObj.newProp = 1007;
delete obj2.propObj.redundantPropStr;
obj2.propObj.propArr[3].propStr = "24";
obj2.propObj.propArr.push(70)

var diff = {names:["newNum","newProp", "propObj","redundantPropStr","propArr","propStr"],
    "0":"1001",
    "a1":"1002",
    "2/1":"1007",
    "d2/3":"",
    "2/4/[3]/":"24",
    "2/4/[4]/":70};

