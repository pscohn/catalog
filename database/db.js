var pg = require('pg');
var connectionString = 'postgres://vagrant:vagrant@localhost:5432/catalog';

module.exports = {
    query: function(text, values, callback) {
        pg.connect(connectionString, function(err, client, done) {
            client.query(text, values, function(err, result) {
                done();
                callback(err, result);
            });
        });
    }
};
