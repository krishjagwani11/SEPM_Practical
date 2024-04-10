// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data
const sampleData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 28 }
];

// Endpoint to serve sample data
app.get('/api/data', (req, res) => {
    res.json(sampleData);
});

// Serve frontend files
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
