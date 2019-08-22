let express=require("express");
let cors = require("cors");
let app=express();
let data = require("./citidata.json");
app.use(express.static(__dirname));
app.use(cors());
app.get("/data",function(request,response){
//response.send("Welcometo YourLife")
response.send(data)
});
app.listen(6050);
console.log("server is now live on localhost:6050")