const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// init express
const app = express();

// root endpoint
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/index.html'));
});

const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));