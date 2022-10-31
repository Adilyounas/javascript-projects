
const fs = require("fs");


//create folder
fs.mkdirSync("adil younas");


//delete folder
fs.rmdirSync("adil younas");



// creating a new file
// if file is not present then it create and add data into the file, 
// if file is not there then it create file and add date in it.
//if file exist it will override past data
fs.writeFileSync("read.txt", "wecome to Mr.Dumb channel");



//how to add data to existing file
fs.appendFileSync("read.txt", "how are you");



//utf-8 to remove buffer data
//use to read file
let rf = fs.readFileSync("read.txt", "utf-8");
console.log(rf)



//to rename file
fs.renameSync("read.text","readWrite.txt")

