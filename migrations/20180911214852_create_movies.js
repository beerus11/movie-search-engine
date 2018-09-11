
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movies', function (table) {
        table.increments('movieId');
        table.string('movie_title');
        table.string('movie_genre');
        table.decimal('movie_rating', 3, 1);
        table.string('movie_release_date');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('movies');
};
