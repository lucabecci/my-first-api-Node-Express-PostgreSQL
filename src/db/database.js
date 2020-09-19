const { Pool } = require('pg')
//conexion con db
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'firstapi',
    port: '5432'
});

module.exports = pool;