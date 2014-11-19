var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    http           = require('http'),
    port = parseInt(process.env.PORT, 10) || 4567;


var options = {host : "https://openexchangerates.org/", path: "api/latest.json?app_id=1ebe0f2223e94cb794de0e615ab42793"};


app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/app'));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));



app.get("/get-conv", function(req, res){
  var req = http.get(options, function(resp){
   var bodyChunks = [];
   resp.on("data", function(chunk){
    bodyChunks.push(chunk);
   }).on("end", function(){
    var body = Buffer.concat(bodyChunks);
    res.json(body);
   })
  })
  
 req.on("error", function(e){
  console.log("ERR : " + e.message);
 }) 
  

})


console.log("Simple static server listening at http://localhost:" + port);
app.listen(port);
