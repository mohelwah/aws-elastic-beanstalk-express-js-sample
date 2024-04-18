const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('change runing form aws pipline!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
