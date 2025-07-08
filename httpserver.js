import http from 'http'


const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.setHeader("Content-type","text/html")
        res.end("<h1>Hello World</h1>")
    }
   else if(req.url === '/home'){
        res.setHeader("Content-type","text/html")
        res.end("<h1>Wlecome to home page</h1>")
    }
   else if(req.url === '/about'){
        res.setHeader("Content-type","text/html")
        res.end("<h1>wlecome to about page</h1>")
    }
   else if(req.url === '/contactus'){
        res.setHeader("Content-type","text/html")
        res.end("<h1>wlecome to contact page</h1>")
    }else{
        const stauscode = 404
        res.setHeader("Content-type","text/html")
        res.end("<h1>Page is Not Found</h1>")
        
    }
        
})

const port = 3000
server.listen(port,()=>{
    console.log(`server listen on the port: ${port}`);
    
    
})