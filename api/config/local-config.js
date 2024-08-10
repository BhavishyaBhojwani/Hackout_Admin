let _port=process.env.PORT || 5000;
let db=process.env.db || "farmersmart";
// let db_port=process.env.db_port || 81;
let db_host=process.env.db_host || "127.0.0.1";
let db_user=process.env.db_user || "root";
// let db_password=process.env.db_password || ;

module.exports={
  port:_port,

  database :{
    host : db_host,
    user : db_user,
    db : db
  },
  crypto:{
    secretkey:"",
    iv:""
  }
  
};