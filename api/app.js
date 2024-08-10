const express=require('express');
const app=express();
const config=require('./config/local-config');
const dbhelper=new (require('./services/dbhelper/index'));
let port=config.port;

app.use(express.json());

const signupRouter=require('./router/signup_r');
app.use('/accounts', signupRouter);

app.use('*', function(req, res){
  res.status(200).send("Access Denied");
});

app.listen(port, function(){
  dbhelper.getConnection();
  console.log("Farmer's Mart Backend API is listening on PORT 5000...");
});

