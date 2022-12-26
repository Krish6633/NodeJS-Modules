const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crud',
    password: 'krish',
    port: 5432,
});

module.exports = pool;


/*----query----*/

pool.query(`INSERT INTO public.user (name,id,address) VALUES ($1, $2, $3)`, [], (error, results) => {
    if (error) {
        throw error
    }
    res.status(200).send("Record created...");
})