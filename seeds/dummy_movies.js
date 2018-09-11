
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
   // knex('table_name').del(),

    // Inserts seed entries
    knex('movies').insert({
        "movieId": 3,
        "movie_title": "Donnie Brasco",
        "movie_genre": "Crime|Drama",
        "movie_rating": 1.7,
        "movie_release_date": "4/12/2009"
    }),
    knex('movies').insert({
        "movieId": 4,
        "movie_title": "Edison Force (a.k.a. Edison)",
        "movie_genre": "Crime|Drama|Thriller",
        "movie_rating": 1.4,
        "movie_release_date": "4/8/2012"
    }),
    knex('movies').insert({
        "movieId": 5,
        "movie_title": "The Inspector",
        "movie_genre": "Drama|Romance",
        "movie_rating": 2.2,
        "movie_release_date": "7/13/2009"
    })
  );
};
