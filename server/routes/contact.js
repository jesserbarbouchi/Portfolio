const express = require('express');
const router = express.Router();
const { sql, connectToDB } = require('../db/database'); 


connectToDB();

router.post('/', async (req, res) => {
    const { name, email, phone, message, linkedin, github, twitter } = req.body;

    const sqlQuery = `INSERT INTO contact_submissions (name, email, phone, message, linkedin, github, twitter) 
                      VALUES (@name, @email, @phone, @message, @linkedin, @github, @twitter)`;
    try {
        const request = new sql.Request();
        request.input('name', sql.VarChar, name);
        request.input('email', sql.VarChar, email);
        request.input('phone', sql.VarChar, phone);
        request.input('message', sql.VarChar, message);
        request.input('linkedin', sql.VarChar, linkedin);
        request.input('github', sql.VarChar, github);
        request.input('twitter', sql.VarChar, twitter);

        const result = await request.query(sqlQuery);
        console.log('Data inserted successfully:', result);
        res.status(201).json({ message: 'Contact created successfully' });
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
