var query = require('../database/db.js').query;

module.exports = function(app) {
    app.get('/', function(req, res) {
        query('SELECT * FROM videogame', function(err, result) {
            return res.json(result.rows);
        });
    });
};
