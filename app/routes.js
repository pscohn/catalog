var pg = require('pg');
var connectionString = 'postgres://vagrant:vagrant@localhost:5432/catalog';
pg.defaults.password = '';

module.exports = function(app) {
    app.get('/', function(req, res) {
        var games = [];
        pg.connect(connectionString, function(err, client, done) {
            if (err) {
                throw err;
            }
            var query = client.query('SELECT * FROM videogame');
            query.on('row', function(row) {
                games.push(row);
            });
            query.on('end', function() {
                return res.json(games);;
            });
        });
    });
};
