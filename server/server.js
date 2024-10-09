const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/database'); // Connects to the database
const contactRoutes = require('./routes/contact');
const commentsRoutes = require('./routes/comments');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());  // Parse JSON bodies

app.use(cors());
// app.use(bodyParser.json());

app.use('/api/contact', contactRoutes);
app.use('/api/comments', commentsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});