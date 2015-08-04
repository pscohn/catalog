var pg = require('pg');
var connectionString = 'postgres://vagrant:vagrant@localhost:5432/catalog';

module.exports = {
    query: function(text, values, callback) {
        pg.connect(connectionString, function(err, client, done) {
            if (err) throw err;
            client.query(text, values, function(err, result) {
                if (err) throw err;
                done();
                if (typeof callback == 'undefined') {
                    callback = values;
                }
                callback(err, result);
            });
        });
    }
};
