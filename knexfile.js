// Update with your config settings.

module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'anurag',
            database: 'movie-search',
            seeds: {
                directory: './seeds/dev'
            }
        }
    },

    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL
    },

};
