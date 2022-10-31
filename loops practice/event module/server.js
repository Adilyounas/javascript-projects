const http = require("http");

const server = http.createServer( (req,res)=>{
    
    if(req.url== "/"){
        res.end("welcome to home page")
    }else if (req.url =="/about"){
        res.end("welcome to the about page")
    }else if (req.url =="/contact us"){
        res.end("welcome to the contact us page")
    }else if (req.url =="/our services"){
        res.end("welcome to our best services")
    }else{
        res.writeHead(404, {"Content-type" : "text/html"})
        res.end("<h1>404 error the page does't exist</h1>")
    }

});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("server is listening to the port 800")
});




