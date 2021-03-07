'use strict'

module.exports = function(app){
    var jsonku = require('./controller')

    app.route('/')
        .get(jsonku.index);

    app.route('/show')
        .get(jsonku.showAll);
    
    app.route('/show/:id')
        .get(jsonku.showId);

    app.route('/add')
        .post(jsonku.addMhs);

    app.route('/update')
        .put(jsonku.updateMhs);

    app.route('/delete')
        .put(jsonku.delMhs);
};