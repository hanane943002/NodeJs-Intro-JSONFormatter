console.log("hello world !")
const fs = require('fs');
const obj = fs.readFileSync("./my_magical_program.json", {encoding:"utf8", flag:"r"});
const data = JSON.parse(obj);
const newdata = JSON.stringify(data,null,2);
console.log(newdata);
const outpout = fs.writeFileSync("outpout.json",newdata);

