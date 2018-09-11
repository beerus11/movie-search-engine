var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

function Movies() {
    return knex('movies');
}

router.get('/movies', function (req, res, next) {
    Movies().select().then(function (results) {
        res.render('movies/index', {movies: results});
    });
});

router.get('/movies/new', function (req, res, next) {
    res.render('movies/new', {movie: {}});
});

router.get('/movies/:index', function (req, res, next) {
    var index = req.params.index;
    Movies().where({movieId: index}).first().then(function (results) {
        res.render(`movies/movie`, {movie: results});
    });
});

router.get('/movies/search/:query', function (req, res, next) {
    var q = '%' + req.params.query + '%';
    console.log(q);
    Movies().where('movie_title', 'like', q).orWhere('movie_genre', 'like', q).orderBy('movie_title', 'desc').then(function (results) {
        res.send(results)
    });
});

router.get('/movies/:id/edit', function (req, res, next) {
    var id = req.params.id;
    Movies().where({movieId: id}).first().then(function (results) {
        res.render('movies/edit', {movie: results});
    });
});

router.post('/movies', function (req, res, next) {
    Movies().insert({
        movie_title: req.body.title,
        movie_genre: req.body.genre,
        movie_rating: req.body.rating,
        movie_release_date: req.body.release_date
    }).then(function (result) {
        res.redirect('/movies');
    });
});

router.post('/movies/:id/edit', function (req, res, next) {
    var id = req.params.id;
    Movies().update({
        movie_title: req.body.title,
        movie_genre: req.body.genre,
        movie_rating: req.body.rating,
        movie_release_date: req.body.release_date
    }).where({id: id}).then(function (result) {
        res.redirect('/movies/');
    });
});

router.post('/movies/:id/delete', function (req, res) {
    Movies().where('id', req.params.id).del()
        .then(function (result) {
            res.redirect('/movies');
        });
});


module.exports = router;
