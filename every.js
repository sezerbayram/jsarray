//boolean output
const { info }  = require("./array");

const hasStudentId80000 = info.every((item)=> {return item.id >= 79999});
console.log(hasStudentId80000);