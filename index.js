// BASIC CONFIG
const express = require('express');
const app = express();
const cors = require('cors');
app.set('port', process.env.PORT || 3111);

// ROUTES -- redirect
app.get('/', (req, res) => {
  res.redirect('/chores/list/');
});

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/* START CONTROLLERS HERE */

const choresController = require('./controllers/choresController');
app.use('/chores/list/', choresController);

const usersController = require('./controllers/usersController');
app.use('/users/list/', usersController);

/* END CONTROLLERS HERE */

app.use((err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).send(message);
});

// START SERVER
app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
