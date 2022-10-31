const fs = require("fs");
const http = require("http");
const server = http.createServer();

//res.write() is use to start data
//res.end() is use to end data
//both can use in streaming but in other file we can't use single item
//res.write() + res.end() use in other type
server.on("request", (req, res) => {
    const rstream = fs.createReadStream("inputs.txt");

    rstream.on("data", (chunkdata) => {
        res.end(chunkdata)
    });

    rstream.on("end", () => {
        res.end()
    });

    rstream.on("error", (err) => {
        res.end(err)
    })



});

server.listen(8000, "127.0.0.1");