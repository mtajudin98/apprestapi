'use strict'

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi RestApi berjalan",res)
};

//show all data mahasiswa
exports.showAll = function(req, res){
    connection.query("SELECT * FROM mahasiswa", function(err , rows, field){
        if(err){
            connection.log(err);
        }else{
           response.ok(rows, res) 
        }
    });
};