var mysql = require('mysql');

//connect database
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restapi'
});

con.connect((err)=>{
    if(err) throw err;
    console.log("connection true");
});

module.exports = con;