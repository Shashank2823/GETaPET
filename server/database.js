var mysql=require("mysql");

var connection=mysql.createConnection({
    host:'localhost',
    database:'pet_adoption',
    user:'root',
    password:'Shashank28$'
});

module.exports=connection;