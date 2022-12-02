

var jwt = require('jsonwebtoken');
var express = require("express");

var app = express()
app.use(express.json())

// const privateKey = "rada";


// jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, { expiresIn: 60 },function(err, token) {
//     console.log(token);
//   });

app.get('/api/red' , (req,res)=>{
res.send("rada")
})

app.post('/api' ,(req,res)=>{
      var privateKey = "radayuytuyrrtyrtr5y545e6eed65d65d6d5r6df";
      let user = {id: 2};
    var token = jwt.sign({ user}, privateKey);
  
    console.log(token);

    res.json({
        token
    })
})







app.listen('3000' ,()=>{ console.log("started on port 3000"); })