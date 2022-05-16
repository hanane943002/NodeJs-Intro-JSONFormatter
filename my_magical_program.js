const fs = require('fs');
let myArgs = process.argv.slice(2);
myArgs2 = myArgs[1]



function inputArgs(myArgs, myArgs2){
    console.log(myArgs);
    const obj = fs.readFileSync(myArgs, {encoding:"utf8", flag:"r"});
    const data = JSON.parse(obj);
    const newdata = JSON.stringify(data,null,2);
    console.log(newdata);
    const output = fs.writeFileSync(myArgs2, newdata);


}
inputArgs(myArgs[0], myArgs2)
