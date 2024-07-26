const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
    res.send('Welcome to the Random Image API');
});

app.get('/api/images/random', (req, res) => {
    const count = parseInt(req.query.count) || 1;
    const imageUrls = [];

    for (let i = 0; i < count; i++) {
        imageUrls.push(`https://picsum.photos/200?random=${Math.random()}`);
    }

    res.json({
        count: imageUrls.length,
        images: imageUrls
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
