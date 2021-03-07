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

//showbyid
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

//insert data
exports.addMhs = function(req, res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query("INSERT INTO mahasiswa (nim, nama, jurusan) VALUES(?,?,?)", [nim, nama, jurusan],
    function(err , rows, fields){
        if(err){
            console.log(err);
        }else{
            response.ok("success",res)
        }
    });
};

//update data
exports.updateMhs = function(req, res){
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query("UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?", [nim,nama, jurusan, id],
        function(err, rows, fields){
            if(err){
                console.log(err);
            }else{
                response.ok("update suces",res)
            }
        });
}

exports.delMhs = function(req, res){
    var id = req.body.id_mahasiswa;

    connection.query("DELETE FROM mahasiswa WHERE id_mahasiswa = ?", [id],
    function(err, rows, fields){
        if(err){
            console.log(err);
        }else{
            response.ok("delete suces",res)
        }
    });   
}