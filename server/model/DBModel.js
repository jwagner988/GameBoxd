const { Pool } = require('pg')
const path = require('path')

require('dotenv').config({path: path.resolve(__dirname, '../../.env')})

const pool = new Pool({
    connectionString: process.env.PG_URI
})

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}