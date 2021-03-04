const { info }  = require("./array");


const foundArray =info.find ((item) =>{

    return item.quiz_3 == 80;
} )

console.log(foundArray);