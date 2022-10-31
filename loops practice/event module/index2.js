const fs = require("fs");


//create folder
fs.mkdir("adil younas 2", (err)=>{
    console.log("folder is created")
});


//delete folder
fs.rmdir("adil younas 2", (err)=>{
    console.log("folder is Deleted")
});


// creating a new file
// if file is not present then it create and add data into the file, 
// if file is not there then it create file and add date in it.
//if file exist it will override past data
fs.writeFile("read2.txssss", "wecome to text 2 file sir ", (err)=>{
    console.log(err)
});

//how to add data to existing file
fs.appendFile("read.txt","how are you", (err)=>{
    console.log(err)
});


//utf-8 to remove buffer data
//use to read file
let rf = fs.readFile("read.txt", "utf-8" , (err,data)=>{
    
    console.log(data)
});                                         //🔴


//to rename file
fs.rename("read.text","readWrite.txt");  