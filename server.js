const express = require('express');
const app = express();

app.get("/", function(request, response){
   //console.log(request); 
   response.send('<h1>Hello World!<h1>');
});

app.get("/about",function(req, res){
    res.send('<h3>My name is Britta!<h3>');
});

app.get("/contact",function(req, res){
    res.send('<h3>britta@example.com<h3>');
});

app.listen(3000, function(){
    console.log("Server is running on Port 3000.")

});
