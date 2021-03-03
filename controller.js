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

exports.showId = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?",[id],
        function(err, rows, fields){
            if(err){
                console.log(err);
            }else{
                response.ok(rows, res)
            }
        });
};