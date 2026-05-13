const express = require('express');
require('dotenv').config();

const reportRoutes = require('./routes/reportRoutes');

const app = express();

app.use(express.json());

app.use('/api/reports', reportRoutes);

app.get('/', (req, res) => {
    res.send('Technical Assessment POS API Running');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});