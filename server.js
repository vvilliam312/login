const express = require('express')
const app = express()
const port = 3000
var db = require("./database.js")

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



//LOGGA IN 

app.post('/login',(req,res)=>{
var sql = `SELECT id,count(*) AS logged FROM  users WHERE username='${req.body.username}' AND password='${req.body.password}'`
db.get(sql,function(err,row){
   if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
console.log(row);
var userid=0;
if(row.logged){
  userid=row.id;
}
res.json({
  "userid":userid,
  

});
})
         
});


//LOGGA UT

app.get('/logout/:userid',(req,res)=>{
  var sql = `SELECT id FROM users WHERE users.id='${req.body.logout}'`
console.log(req.params.id);
res.json({
  "logout":1
  

});
})