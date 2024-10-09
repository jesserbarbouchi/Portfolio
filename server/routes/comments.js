const express = require('express');
const { sql, connectToDB } = require('../db/database'); // Import database configuration

const router = express.Router();

// Connect to the database
connectToDB();

// API Routes
router.post('/', async (req, res) => { // Change this line
    const { name, comment, parentId } = req.body;
    try {
        const result = await sql.query`INSERT INTO Comments (Name, Comment, ParentId) VALUES (${name}, ${comment}, ${parentId})`;
        res.status(201).json({ id: result.rowsAffected });
    } catch (error) {
        console.error('Error inserting comment:', error);
        res.status(500).json({ error: 'Failed to insert comment' });
    }
});

router.get('/', async (req, res) => { 
    try {
        const result = await sql.query`SELECT * FROM Comments`;
        res.json(result.recordset); 
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await sql.query`DELETE FROM Comments WHERE Id = ${id}`;
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ error: 'Failed to delete comment' });
    }
});

// Export the router
module.exports = router;
