const { info }  = require("./array");

const newArray = info.map( (item) => {
    return item.quiz_1 + 10;
})

console.log(newArray);