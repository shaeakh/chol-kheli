const postgres = require('postgres')
const pg = require('pg')
require('dotenv/config')

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.SUPABASE_CONNECTION_STRING
});

const connectDB =async ()=>{
    try {
        await pool.connect();
        console.log("Connected to PostgreSQL database");
        return pool;
    } catch (error) {
        console.error("Error connecting to PostgreSQL database:", error);
    }
}



module.exports = {
    connectDB,
    pool
}