const http = require('http');
const fs = require('fs');


const port = 3000

http.createServer((req,res)=>{
    if(req.url === '/'){
        res.setHeader(`Content-type`,`text/html`)
        res.write(`<!DOCTYPE html>
                    <html>
                    <head>
                        <title>Front-Page</title>
                        <style>
                            *{
                                font-size: 1.5rem;
                            }
                            ul{
                                list-style: none;
                                display: flex;
                                align-items: center;
                                justify-content: space-evenly;
                            }
                            a{
                                text-decoration: none;
                            }
                        </style>
                    </head>
                    <body>
                    <header>
                        <nav>
                            <ul>
                                <li><a href="/Assignment-1">Assignment-1</a></li>
                                <li><a href="/Assignment-2">Assignment-2</a></li>
                                <li><a href="/Assignment-3">Assignment-3</a></li>
                            </ul>
                        </nav>
                    </header>
                    </body>
                </html>`)
        res.end()
    }
    else if(req.url === '/Assignment-1'){
        fs.readFile('./Assignment-1/index.html',(e,data)=>{
            res.setHeader(`Content-type`,`text/html`)
            res.write(data)
            res.end()
        })
        
    }
    else if(req.url === '/Assignment-2'){
        fs.readFile('./Assignment-2/index.html',(e,data)=>{
            res.writeHead(200,{'Content-type':`text/html`})
            res.write(data)
            res.end()
        })
        
    }
    else if(req.url === '/style.css'){
        fs.readFile('./Assignment-2/style.css',(e,data)=>{
            res.writeHead(200,{'Content-type':'text/css'})
            res.write(data)
            res.end()
        })
        
        }
    else if(req.url === '/Assignment-3'){
        fs.readFile('./Assignment-3/index.html',(e,data)=>{
            res.setHeader(`Content-type`,`text/html`)
            res.write(data)
            res.end()
        })
        
    }
    else if(req.url === '/Assignment-3/style.css'){
        fs.readFile('./Assignment-3/style.css',(e,data)=>{
            res.writeHead(200,{'Content-type':'text/css'})
            res.write(data)
            res.end()
        })
        
        }
    else if(req.url === '/Assignment-3/script.js'){
        fs.readFile('./Assignment-3/script.js',(e,data)=>{
            res.writeHead(200,{'Content-type':'application/javascript'})
            res.write(data)
            res.end()
        })
        
        }
    else{
        
        
        res.write(`<html>
                    <head>
                    <title>404 ERROR</title>
                    <style>
                        body{
                            margin: 0;
                            height: 100vh;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            text-align: center;
                            font-weight: 800;
                        }
                        h1{
                            font-size: 60px;
                            margin-bottom: 10px;
                        }
                        p{
                            font-size: 20px;
                        } 
                    </style>
                </head>
                <body>
                    <h1>404 - ERROR </h1>
                    <p>Page Not Found</p>
                </body>
                </html>`)
res.end()
    }
}).listen(port,()=>{
    console.log(`http://localhost:${port}`);

})