const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./HomePage.html')
const nearme = fs.readFileSync('./NearMe.html')
const myaccount = fs.readFileSync('./myaccount.html')
const aboutus = fs.readFileSync('./aboutus.html')

const server = http.createServer((req, res)=>{
    console.log(req.url)
    url = req.url;

     res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/nearme'){
        res.end(nearme);
    }
    else if(url == '/myaccount'){
        res.end(myaccount);
    }
    else if(url == '/aboutus'){
        res.end(aboutus);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });