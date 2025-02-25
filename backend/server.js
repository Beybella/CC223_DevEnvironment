const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api', (req, res) => {
    res.send('Fetched from Backend');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
