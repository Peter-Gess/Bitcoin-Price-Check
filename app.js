const express = require('express');

const app = express();

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const routes = require('./routes/index');

app.use(routes);

app.get('/', (request, response) => {
  res.send('index');
});

app.listen(3000);

