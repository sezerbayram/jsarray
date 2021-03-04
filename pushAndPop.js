const { info }  = require("./array");

const addArray = info.push(({student_name:'def', id:79514, quiz_1: 37, quiz_2: 78, quiz_3: 87, final: 78}) )


console.table(info)
console.log(addArray);
constremovedArray = info.pop();
console.table(info)