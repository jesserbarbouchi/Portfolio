const express = require('express');
const router = express.Router();
const { sql, db } = require('../db/database'); // Ensure db connection is properly imported

router.post('/', (req, res) => {
    const { name, email, phone, message, socialMedia } = req.body;
    const { linkedin, github, twitter } = socialMedia || {};  // Handle case if socialMedia is undefined

    // Log the incoming data to check if social media is being received
    console.log('Received Data:', { name, email, phone, message, linkedin, github, twitter });

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const query = `
        INSERT INTO contact_submissions (name, email, phone, message, linkedin, github, twitter) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [name, email, phone, message, linkedin, github, twitter], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Submission successful' });
    });
});



module.exports = router;
