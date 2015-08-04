var api = '/v1';
var query = require('../database/db.js').query;

module.exports = function(app) {
    app.get(api + '/games', function(req, res) {
        query('SELECT * FROM videogame', function(err, result) {
            return res.json(result.rows);
        });
    });

    app.post(api + '/games', function(req, res) {
        query('INSERT INTO videogame (name, year) VALUES ($1, $2) RETURNING id', 
            [req.body.name, req.body.year],
                function(err, result) {
                    if (err) throw err;
                    return res.json({'success': true, 'id': result.rows[0].id});             
        })
    });

    app.delete(api + '/games/:id', function(req, res) {
        query('DELETE FROM videogame WHERE id=$1', [req.params.id], function(err, result) {
            if (err) throw err;
            return res.json({'success': true});
        });
    });
};
