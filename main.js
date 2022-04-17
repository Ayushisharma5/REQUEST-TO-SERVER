var http =require("http");
var fs= require("fs")
var server = http.createServer(function(request, response){


if(request.method=== "GET")
{
    if(request.url==="/")
  {
      fs.readFile("./home.html","utf-8",function(err,data){
          if(err){
              response.end("err is occur");
          }
          else{
              response.end(data)
          }
      })
  }
    else if(request.url=="/me")
    response.end("its me");
    else if(request.url=="/contect")
    response.end("contect")
    else
    response.end("invalid path")
}
else
{
    response.end("invalid get request")
}
});

server.listen(1000,function(){
console.log("server at start at 10000");
});
