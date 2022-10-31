const fs = require("fs");
const http = require("http");


const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("home")
    } else if (req.url == "/about") {
        res.end("about")
    } else if (req.url == "/contactUs"){
        res.end("contact")

    }else if (req.url == "/userapi"){
        fs.readFile(`${__dirname}/api data/data.json` ,"utf-8", (err,data)=>{
            console.log(data)
            res.end(data)
        });
        

    }else{
        res.end("page not found")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("server is listning")
})
