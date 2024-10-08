const sql = require('mssql');
require('dotenv').config();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // Optional for Windows Authentication
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    options: {
        encrypt: true, // Use this if you're on Azure
        trustServerCertificate: true,
        trustedConnection: true // Enable Windows Authentication
    },
    port: parseInt(process.env.DB_PORT, 10) // Ensure port is a number
};

const connectToDB = async () => {
    try {
        await sql.connect(dbConfig);
        console.log('Connected to the database.');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
};

connectToDB();

module.exports = { sql };
