const http=require('http');
const url=require("url");


const server=http.createServer((request,response)=>{
    response.writeHead(200,{})
})