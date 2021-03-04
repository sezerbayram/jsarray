const { info }  = require("./array");

const filteredItem = info.filter( (item) => {
    return item.final == 65;
  });

console.log(filteredItem);
 


