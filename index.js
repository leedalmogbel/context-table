const express = require('express');
const app = express();
let port = process.env.NODE_PORT || 8000;
const routes = require('./routes.js');

app.get('/', (req, res) => res.send('Ping!!!'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Up and Running on port: ${port}`);
});